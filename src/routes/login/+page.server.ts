import { redirect } from '@sveltejs/kit';
import { login } from '$lib/auth/token';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		let user = data.get("username");
		let password = data.get("password");

		if (!user || !password) {
			return { success: false	};
		}

		try {
			const token = await login(user as string, password as string) // await login(user as string, password as string);
			cookies.set("token", token.access_token, { path: "/", maxAge: token.expires_in });
			cookies.set("refresh_token", token.refresh_token, { path: "/", maxAge: 60*60*24});
		} catch (e) {
			console.error(e);
			return { success: false	};
		}
		redirect(303, "/dashboard");
	}
};