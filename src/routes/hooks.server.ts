import { type Handle, redirect } from '@sveltejs/kit';

export const handle: Handle = ({event, resolve}) => {
	const token = event.cookies.get("token")
	if (event.url.pathname !== "/login" && !token) {
		redirect(303, "/login");
	}

	return resolve(event);
}