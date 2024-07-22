import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';

import type { UserRequestSchema,UserResponseSchema,Body_upload_files_uploadfiles__post } from './models';



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
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static deleteUsersIdDelete(data: TDataDeleteUsersIdDelete): CancelablePromise<string> {
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

export type TDataUploadFilesUploadfilesPost = {
                formData: Body_upload_files_uploadfiles__post
                
            }
export type TDataQuestionQuestionGet = {
                question: string
                
            }

export class LoginService {

	/**
	 * Index
	 * @returns boolean Successful Response
	 * @throws ApiError
	 */
	public static indexHealthGet(): CancelablePromise<boolean> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/health',
		});
	}

	/**
	 * Index
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static indexModelsGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/models',
		});
	}

	/**
	 * Upload Files
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static uploadFilesUploadfilesPost(data: TDataUploadFilesUploadfilesPost): CancelablePromise<string> {
		const {
formData,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/uploadfiles/',
			formData: formData,
			mediaType: 'multipart/form-data',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Question
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static questionQuestionGet(data: TDataQuestionQuestionGet): CancelablePromise<string> {
		const {
question,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/question/',
			query: {
				question
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}