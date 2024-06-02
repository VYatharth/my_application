import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';

import type { UserRequestSchema,UserResponseSchema,LoginRequestSchema } from './models';



export class DefaultService {

	/**
	 * Index
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static indexGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/',
		});
	}

}

export type TDataCreateUsersPost = {
                requestBody: UserRequestSchema
                
            }
export type TDataGetUsersIdGet = {
                id: number
                
            }
export type TDataUpdateUsersIdPatch = {
                id: number
requestBody: UserRequestSchema
                
            }
export type TDataDeleteUsersIdDelete = {
                id: number
                
            }

export class UserService {

	/**
	 * Index
	 * @returns UserResponseSchema Successful Response
	 * @throws ApiError
	 */
	public static indexUsersGet(): CancelablePromise<Array<UserResponseSchema>> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/users/',
		});
	}

	/**
	 * Create
	 * @returns UserResponseSchema Successful Response
	 * @throws ApiError
	 */
	public static createUsersPost(data: TDataCreateUsersPost): CancelablePromise<UserResponseSchema> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/users/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get
	 * @returns UserResponseSchema Successful Response
	 * @throws ApiError
	 */
	public static getUsersIdGet(data: TDataGetUsersIdGet): CancelablePromise<UserResponseSchema> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/users/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update
	 * @returns UserResponseSchema Successful Response
	 * @throws ApiError
	 */
	public static updateUsersIdPatch(data: TDataUpdateUsersIdPatch): CancelablePromise<UserResponseSchema> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/users/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static deleteUsersIdDelete(data: TDataDeleteUsersIdDelete): CancelablePromise<unknown> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/users/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataCreateLoginPost = {
                requestBody: LoginRequestSchema
                
            }

export class LoginService {

	/**
	 * Create
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static createLoginPost(data: TDataCreateLoginPost): CancelablePromise<unknown> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/login/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

}