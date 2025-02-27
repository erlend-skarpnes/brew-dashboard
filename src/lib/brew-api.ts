/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ResponseOfEquipmentGroupAction {
	succeeded?: boolean;
	message?: string | null;
	errors?: string[] | null;
	metadata?: unknown;
	data?: EquipmentGroupAction | null;
}

export type EquipmentGroupAction = EntityOfGuid & {
	equipmentGroupIotHubGroupId?: string | null;
	/** @format guid */
	userId?: string;
	isConfirmedGuide?: boolean;
};

export interface EntityOfGuid {
	/** @format guid */
	id?: string;
	/** @format date-time */
	createdAt?: string;
	/** @format date-time */
	updatedAt?: string;
	/** @format date-time */
	deletedAt?: string | null;
}

export interface ResponseOfString {
	succeeded?: boolean;
	message?: string | null;
	errors?: string[] | null;
	metadata?: unknown;
	data?: string | null;
}

export interface UpdateEquipmentGroupDto {
	isConfirmedGuide?: boolean;
}

export interface ResponseOfEquipmentDto {
	succeeded?: boolean;
	message?: string | null;
	errors?: string[] | null;
	metadata?: unknown;
	data?: EquipmentDto | null;
}

export interface EquipmentDto {
	/** @format guid */
	id?: string;
	iotHubBrewEquipmentId?: string | null;
	iotHubBrewEquipmentGroupId?: string | null;
	/** @format guid */
	userId?: string | null;
	owner?: string | null;
	brewName?: string | null;
	name?: string | null;
	webhook?: string | null;
	color?: Color | null;
	isLoggingData?: boolean | null;
	isRegulatingTemperature?: boolean | null;
	isActive?: boolean | null;
	/** @format float */
	actualTemperature?: number | null;
	/** @format float */
	setTemperature?: number | null;
	/** @format int32 */
	fanSpeed?: number | null;
	/** @format float */
	abv?: number | null;
	/** @format int32 */
	ebc?: number | null;
	/** @format int32 */
	ibu?: number | null;
	/** @format float */
	fg?: number | null;
	/** @format float */
	og?: number | null;
	/** @format float */
	sg?: number | null;
	/** @format float */
	volume?: number | null;
	/** @format int32 */
	battery?: number | null;
	beerStyle?: string | null;
	lProcess?: LProcess | null;
	hProcess?: HProcess | null;
	fermented?: FermentedType | null;
	/** @format date-time */
	brewDate?: string | null;
	/** @format guid */
	equipmentId?: string | null;
	isConfirmedGuide?: boolean;
	/** @format int32 */
	activityTimeSession?: number | null;
	/** @format date-time */
	lastActivityTime?: string | null;
	connectedEquipments?: string[] | null;
	deviceTwinState?: DeviceTwinState | null;
}

export enum Color {
	None = 'None',
	Red = 'Red',
	Blue = 'Blue',
	Green = 'Green',
	Pink = 'Pink',
	Yellow = 'Yellow',
	Teal = 'Teal',
	White = 'White',
	TiltRed = 'TiltRed',
	TiltGreen = 'TiltGreen',
	TiltBlack = 'TiltBlack',
	TiltPurple = 'TiltPurple',
	TiltOrange = 'TiltOrange',
	TiltBlue = 'TiltBlue',
	TiltYellow = 'TiltYellow',
	TiltPink = 'TiltPink'
}

export enum LProcess {
	Ready = 'Ready',
	Cooling = 'Cooling',
	Heating = 'Heating',
	Idle = 'Idle'
}

export enum HProcess {
	Stop = 'Stop',
	Start = 'Start'
}

export enum FermentedType {
	None = 'None',
	Top = 'Top',
	Bottom = 'Bottom'
}

export interface DeviceTwinState {
	deviceId?: string | null;
	deviceType?: string | null;
	region?: string | null;
	desiredSwVersion?: string | null;
	desiredHwVersion?: string | null;
	reportedSwVersion?: string | null;
	reportedHwVersion?: string | null;
	dataLog?: boolean;
	color?: Color;
	hProcess?: HProcess;
	lProcess?: LProcess;
	connectionState?: DeviceConnectionState | null;
	/** @format date-time */
	lastActivityTime?: string | null;
	swUpdateStatus?: string | null;
	swUpdateStatusRef?: string | null;
	swUpdateStatusMessage?: string | null;
	updateAvailable?: boolean;
	swUpdateInProgress?: boolean;
	swUpdateFailed?: boolean;
}

export enum DeviceConnectionState {
	Disconnected = 'Disconnected',
	Connected = 'Connected'
}

export interface ResponseOfIReadOnlyCollectionOfEquipmentDto {
	succeeded?: boolean;
	message?: string | null;
	errors?: string[] | null;
	metadata?: unknown;
	data?: EquipmentDto[] | null;
}

export interface FilterQuery {
	operator?: FilterOperator;
	field?: string | null;
	value?: string | null;
}

export enum FilterOperator {
	Equal = 'Equal',
	NotEqual = 'NotEqual',
	Contains = 'Contains',
	DoesNotContain = 'DoesNotContain',
	EndsWith = 'EndsWith',
	StartsWith = 'StartsWith',
	GreaterThanOrEqual = 'GreaterThanOrEqual',
	LessThanOrEqual = 'LessThanOrEqual',
	LessThan = 'LessThan',
	GreaterThan = 'GreaterThan'
}

export interface SortQuery {
	direction?: SortDirection;
	field?: string | null;
}

export enum SortDirection {
	Ascending = 'Ascending',
	Descending = 'Descending'
}

export enum FilterLogic {
	And = 'And',
	Or = 'Or'
}

export interface RegisterEquipmentRequestDto {
	iotHubId?: string | null;
}

export interface UpdateEquipmentRequestDto {
	owner?: string | null;
	brewName?: string | null;
	name?: string | null;
	color?: Color | null;
	isLoggingData?: boolean | null;
	isRegulatingTemperature?: boolean | null;
	isActive?: boolean | null;
	/** @format float */
	actualTemperature?: number | null;
	/** @format float */
	setTemperature?: number | null;
	/** @format int32 */
	fanSpeed?: number | null;
	/** @format float */
	abv?: number | null;
	/** @format int32 */
	ebc?: number | null;
	/** @format int32 */
	ibu?: number | null;
	/** @format float */
	fg?: number | null;
	/** @format float */
	og?: number | null;
	/** @format float */
	sg?: number | null;
	/** @format float */
	volume?: number | null;
	/** @format int32 */
	battery?: number | null;
	beerStyle?: string | null;
	lProcess?: LProcess | null;
	hProcess?: HProcess | null;
	fermented?: FermentedType | null;
	/** @format date-time */
	brewDate?: string | null;
	connectedEquipments?: string[] | null;
	webhook?: string | null;
}

export interface ResponseOfBoolean {
	succeeded?: boolean;
	message?: string | null;
	errors?: string[] | null;
	metadata?: unknown;
	data?: boolean;
}

export interface ResponseOfIReadOnlyCollectionOfGraphic {
	succeeded?: boolean;
	message?: string | null;
	errors?: string[] | null;
	metadata?: unknown;
	data?: Graphic[] | null;
}

export interface Graphic {
	name?: string | null;
	data?: Coordinate[] | null;
	/** @format float */
	min?: number | null;
	/** @format float */
	max?: number | null;
}

export interface Coordinate {
	/** @format date-time */
	x?: string;
	y?: unknown;
}

export interface ResponseOfIReadOnlyCollectionOfTelemetryData {
	succeeded?: boolean;
	message?: string | null;
	errors?: string[] | null;
	metadata?: unknown;
	data?: TelemetryData[] | null;
}

export interface TelemetryData {
	/** @format date-time */
	timestamp?: string;
	/** @format int32 */
	selectGrav?: number | null;
	/** @format float */
	dGrav?: number | null;
	/** @format float */
	tGrav?: number | null;
	/** @format float */
	tAct?: number | null;
	/** @format float */
	tSet?: number | null;
	/** @format int32 */
	hProcess?: number | null;
	/** @format int32 */
	lProcess?: number | null;
	/** @format int32 */
	time?: number | null;
	/** @format int32 */
	mutime?: number | null;
	/** @format int32 */
	err?: number | null;
	/** @format int32 */
	colorId?: number | null;
	/** @format int32 */
	vBat?: number | null;
	/** @format float */
	tRate?: number | null;
	/** @format float */
	og?: number | null;
	/** @format float */
	fg?: number | null;
	/** @format float */
	abv?: number | null;
	/** @format int32 */
	rst?: number | null;
}

export interface ResponseOfEquipmentStateDto {
	succeeded?: boolean;
	message?: string | null;
	errors?: string[] | null;
	metadata?: unknown;
	data?: EquipmentStateDto | null;
}

export interface EquipmentStateDto {
	/** @format guid */
	id?: string;
	/** @format float */
	og?: number | null;
	/** @format float */
	sg?: number | null;
	/** @format float */
	actualTemperature?: number | null;
}

export interface SettingDto {
	/**
	 * @format int32
	 * @min 1
	 * @max 1440
	 */
	activityTimeSession?: number | null;
	/**
	 * @format int32
	 * @min 1
	 * @max 60
	 */
	getStatesTimeout?: number | null;
}

export interface ResponseOfUserSettingDto {
	succeeded?: boolean;
	message?: string | null;
	errors?: string[] | null;
	metadata?: unknown;
	data?: UserSettingDto | null;
}

export interface UserSettingDto {
	/** @format guid */
	id?: string;
	userId?: string | null;
	showMergingBatchInfoPopup?: boolean | null;
	/** @format int32 */
	utcTimeOffset?: number | null;
}

export interface CreateUpdateUserSettingDto {
	showMergingBatchInfoPopup?: boolean | null;
	/** @format int32 */
	utcTimeOffset?: number | null;
}

export type QueryParamsType = Record<string | number, unknown>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
	/** set parameter to `true` for call `securityWorker` for this request */
	secure?: boolean;
	/** request path */
	path: string;
	/** content type of request body */
	type?: ContentType;
	/** query params */
	query?: QueryParamsType;
	/** format of response (i.e. response.json() -> format: "json") */
	format?: ResponseFormat;
	/** request body */
	body?: unknown;
	/** base url */
	baseUrl?: string;
	/** request cancellation token */
	cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
	baseUrl?: string;
	baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
	securityWorker?: (
		securityData: SecurityDataType | null
	) => Promise<RequestParams | void> | RequestParams | void;
	customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
	data: D;
	error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
	Json = 'application/json',
	FormData = 'multipart/form-data',
	UrlEncoded = 'application/x-www-form-urlencoded',
	Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
	public baseUrl: string = 'https://api.brewcreator.com';
	private securityData: SecurityDataType | null = null;
	private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
	private abortControllers = new Map<CancelToken, AbortController>();
	private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

	private baseApiParams: RequestParams = {
		credentials: 'same-origin',
		headers: {},
		redirect: 'follow',
		referrerPolicy: 'no-referrer'
	};

	constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
		Object.assign(this, apiConfig);
	}

	public setSecurityData = (data: SecurityDataType | null) => {
		this.securityData = data;
	};

	protected encodeQueryParam(key: string, value: unknown) {
		const encodedKey = encodeURIComponent(key);
		return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
	}

	protected addQueryParam(query: QueryParamsType, key: string) {
		return this.encodeQueryParam(key, query[key]);
	}

	protected addArrayQueryParam(query: QueryParamsType, key: string) {
		const value = query[key];
		return value.map((v: unknown) => this.encodeQueryParam(key, v)).join('&');
	}

	protected toQueryString(rawQuery?: QueryParamsType): string {
		const query = rawQuery || {};
		const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
		return keys
			.map((key) =>
				Array.isArray(query[key])
					? this.addArrayQueryParam(query, key)
					: this.addQueryParam(query, key)
			)
			.join('&');
	}

	protected addQueryParams(rawQuery?: QueryParamsType): string {
		const queryString = this.toQueryString(rawQuery);
		return queryString ? `?${queryString}` : '';
	}

	private contentFormatters: Record<ContentType, (input: unknown) => unknown> = {
		[ContentType.Json]: (input: unknown) =>
			input !== null && (typeof input === 'object' || typeof input === 'string')
				? JSON.stringify(input)
				: input,
		[ContentType.Text]: (input: unknown) =>
			input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
		[ContentType.FormData]: (input: unknown) =>
			Object.keys(input || {}).reduce((formData, key) => {
				const property = input[key];
				formData.append(
					key,
					property instanceof Blob
						? property
						: typeof property === 'object' && property !== null
							? JSON.stringify(property)
							: `${property}`
				);
				return formData;
			}, new FormData()),
		[ContentType.UrlEncoded]: (input: unknown) => this.toQueryString(input)
	};

	protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
		return {
			...this.baseApiParams,
			...params1,
			...(params2 || {}),
			headers: {
				...(this.baseApiParams.headers || {}),
				...(params1.headers || {}),
				...((params2 && params2.headers) || {})
			}
		};
	}

	protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
		if (this.abortControllers.has(cancelToken)) {
			const abortController = this.abortControllers.get(cancelToken);
			if (abortController) {
				return abortController.signal;
			}
			return void 0;
		}

		const abortController = new AbortController();
		this.abortControllers.set(cancelToken, abortController);
		return abortController.signal;
	};

	public abortRequest = (cancelToken: CancelToken) => {
		const abortController = this.abortControllers.get(cancelToken);

		if (abortController) {
			abortController.abort();
			this.abortControllers.delete(cancelToken);
		}
	};

	public request = async <T = unknown, E = unknown>({
		body,
		secure,
		path,
		type,
		query,
		format,
		baseUrl,
		cancelToken,
		...params
	}: FullRequestParams): Promise<HttpResponse<T, E>> => {
		const secureParams =
			((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
				this.securityWorker &&
				(await this.securityWorker(this.securityData))) ||
			{};
		const requestParams = this.mergeRequestParams(params, secureParams);
		const queryString = query && this.toQueryString(query);
		const payloadFormatter = this.contentFormatters[type || ContentType.Json];
		const responseFormat = format || requestParams.format;

		return this.customFetch(
			`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
			{
				...requestParams,
				headers: {
					...(requestParams.headers || {}),
					...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {})
				},
				signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
				body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body)
			}
		).then(async (response) => {
			const r = response.clone() as HttpResponse<T, E>;
			r.data = null as unknown as T;
			r.error = null as unknown as E;

			const data = !responseFormat
				? r
				: await response[responseFormat]()
						.then((data) => {
							if (r.ok) {
								r.data = data;
							} else {
								r.error = data;
							}
							return r;
						})
						.catch((e) => {
							r.error = e;
							return r;
						});

			if (cancelToken) {
				this.abortControllers.delete(cancelToken);
			}

			if (!response.ok) throw data;
			return data;
		});
	};
}

/**
 * @title BrewCreator API
 * @version v1
 * @baseUrl https://api.brewcreator.com
 *
 * BrewCreator API
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
	api = {
		/**
		 * No description
		 *
		 * @tags EquipmentGroups
		 * @name EquipmentGroupsUpdateEquipmentGroup
		 * @request PUT:/api/v{version}/equipmentgroups/{iotHubGroupId}
		 * @secure
		 */
		equipmentGroupsUpdateEquipmentGroup: (
			iotHubGroupId: string | null,
			version: string = "1",
			data: UpdateEquipmentGroupDto,
			params: RequestParams = {}
		) =>
			this.request<ResponseOfEquipmentGroupAction, ResponseOfString>({
				path: `/api/v${version}/equipmentgroups/${iotHubGroupId}`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Equipments
		 * @name EquipmentsGetEquipment
		 * @request GET:/api/v{version}/equipments/{id}
		 * @secure
		 */
		equipmentsGetEquipment: (id: string, version: string = "1", params: RequestParams = {}) =>
			this.request<ResponseOfEquipmentDto, ResponseOfString>({
				path: `/api/v${version}/equipments/${id}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Equipments
		 * @name EquipmentsUpdateEquipment
		 * @request PUT:/api/v{version}/equipments/{id}
		 * @secure
		 */
		equipmentsUpdateEquipment: (
			id: string,
			data: UpdateEquipmentRequestDto,
			version: string = "1",
			params: RequestParams = {}
		) =>
			this.request<ResponseOfEquipmentDto, ResponseOfString>({
				path: `/api/v${version}/equipments/${id}`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Equipments
		 * @name EquipmentsUnregisterEquipment
		 * @request DELETE:/api/v{version}/equipments/{id}
		 * @secure
		 */
		equipmentsUnregisterEquipment: (id: string, version: string = "1", params: RequestParams = {}) =>
			this.request<ResponseOfBoolean, ResponseOfString>({
				path: `/api/v${version}/equipments/${id}`,
				method: 'DELETE',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Equipments
		 * @name EquipmentsGetEquipments
		 * @request GET:/api/v{version}/equipments
		 * @secure
		 */
		equipmentsGetEquipments: (
			version: string = "1",
			query?: {
				/** @format int32 */
				PageNumber?: number;
				/** @format int32 */
				PageSize?: number;
				Filters?: FilterQuery[] | null;
				Sorts?: SortQuery[] | null;
				Logic?: FilterLogic;
			},
			params: RequestParams = {}
		) =>
			this.request<ResponseOfIReadOnlyCollectionOfEquipmentDto, ResponseOfString>({
				path: `/api/v${version}/equipments`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Equipments
		 * @name EquipmentsRegisterEquipment
		 * @request POST:/api/v{version}/equipments
		 * @secure
		 */
		equipmentsRegisterEquipment: (
			version: string = "1",
			data: RegisterEquipmentRequestDto,
			params: RequestParams = {}
		) =>
			this.request<ResponseOfIReadOnlyCollectionOfEquipmentDto, ResponseOfString>({
				path: `/api/v${version}/equipments`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Equipments
		 * @name EquipmentsCalibrate
		 * @request PUT:/api/v{version}/equipments/{id}/calibrate
		 * @secure
		 */
		equipmentsCalibrate: (id: string, version: string = "1", params: RequestParams = {}) =>
			this.request<File, unknown>({
				path: `/api/v${version}/equipments/${id}/calibrate`,
				method: 'PUT',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Equipments
		 * @name EquipmentsGetEquipmentTelemetryData
		 * @request GET:/api/v{version}/equipments/{id}/telemetrydata
		 * @secure
		 */
		equipmentsGetEquipmentTelemetryData: (
			id: string,
			version: string = "1",
			query?: {
				/** @format date-time */
				startTime?: string;
				/** @format date-time */
				endTime?: string;
			},
			params: RequestParams = {}
		) =>
			this.request<ResponseOfIReadOnlyCollectionOfGraphic, ResponseOfString>({
				path: `/api/v${version}/equipments/${id}/telemetrydata`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Equipments
		 * @name EquipmentsGetEquipmentTelemetryLog
		 * @request GET:/api/v{version}/equipments/{id}/telemetrylog
		 * @secure
		 */
		equipmentsGetEquipmentTelemetryLog: (
			id: string | null,
			version: string = "1",
			query?: {
				/** @format date-time */
				startTime?: string;
				/** @format date-time */
				endTime?: string;
			},
			params: RequestParams = {}
		) =>
			this.request<ResponseOfIReadOnlyCollectionOfTelemetryData, ResponseOfString>({
				path: `/api/v${version}/equipments/${id}/telemetrylog`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Equipments
		 * @name EquipmentsGetStates
		 * @request GET:/api/v{version}/equipments/{id}/getstates
		 * @secure
		 */
		equipmentsGetStates: (id: string, version: string = "1", params: RequestParams = {}) =>
			this.request<ResponseOfEquipmentStateDto, ResponseOfString>({
				path: `/api/v${version}/equipments/${id}/getstates`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Equipments
		 * @name EquipmentsUpdateFirmware
		 * @request POST:/api/v{version}/equipments/{id}/firmware/update
		 * @secure
		 */
		equipmentsUpdateFirmware: (id: string, version: string = "1", params: RequestParams = {}) =>
			this.request<File, unknown>({
				path: `/api/v${version}/equipments/${id}/firmware/update`,
				method: 'POST',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Settings
		 * @name SettingsGet
		 * @request GET:/api/v{version}/settings
		 * @secure
		 */
		settingsGet: (version: string = "1", params: RequestParams = {}) =>
			this.request<File, unknown>({
				path: `/api/v${version}/settings`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Settings
		 * @name SettingsUpdate
		 * @request PUT:/api/v{version}/settings
		 * @secure
		 */
		settingsUpdate: (version: string = "1", data: SettingDto, params: RequestParams = {}) =>
			this.request<File, unknown>({
				path: `/api/v${version}/settings`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Settings
		 * @name SettingsTranslation
		 * @request GET:/api/v{version}/settings/translation/{language}
		 * @secure
		 */
		settingsTranslation: (language: string | null, version: string = "1", params: RequestParams = {}) =>
			this.request<File, unknown>({
				path: `/api/v${version}/settings/translation/${language}`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Settings
		 * @name SettingsSetTranslation
		 * @request POST:/api/v{version}/settings/translation/{language}
		 * @secure
		 */
		settingsSetTranslation: (
			language: string | null,
			version: string = "1",
			data: {
				/** @format binary */
				file?: File | null;
			},
			params: RequestParams = {}
		) =>
			this.request<File, unknown>({
				path: `/api/v${version}/settings/translation/${language}`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.FormData,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Settings
		 * @name SettingsNews
		 * @request GET:/api/v{version}/settings/news/{language}
		 * @secure
		 */
		settingsNews: (language: string | null, version: string = "1", params: RequestParams = {}) =>
			this.request<File, unknown>({
				path: `/api/v${version}/settings/news/${language}`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Settings
		 * @name SettingsSetNews
		 * @request POST:/api/v{version}/settings/news/{language}
		 * @secure
		 */
		settingsSetNews: (
			language: string | null,
			version: string = "1",
			data: {
				/** @format binary */
				file?: File | null;
			},
			params: RequestParams = {}
		) =>
			this.request<File, unknown>({
				path: `/api/v${version}/settings/news/${language}`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.FormData,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags Settings
		 * @name SettingsGetActiveUsers
		 * @request GET:/api/v{version}/settings/activeusers
		 * @secure
		 */
		settingsGetActiveUsers: (version: string = "1", params: RequestParams = {}) =>
			this.request<File, unknown>({
				path: `/api/v${version}/settings/activeusers`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags UserSettings
		 * @name UserSettingsGetSetting
		 * @request GET:/api/v{version}/usersettings
		 * @secure
		 */
		userSettingsGetSetting: (version: string = "1", params: RequestParams = {}) =>
			this.request<ResponseOfUserSettingDto, ResponseOfString>({
				path: `/api/v${version}/usersettings`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags UserSettings
		 * @name UserSettingsCreateUpdateSetting
		 * @request POST:/api/v{version}/usersettings
		 * @secure
		 */
		userSettingsCreateUpdateSetting: (
			version: string = "1",
			data: CreateUpdateUserSettingDto,
			params: RequestParams = {}
		) =>
			this.request<ResponseOfUserSettingDto, ResponseOfString>({
				path: `/api/v${version}/usersettings`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params
			})
	};
}
