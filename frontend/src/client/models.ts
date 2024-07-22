export type Body_upload_files_uploadfiles__post = {
	files: Array<Blob | File>;
};



export type HTTPValidationError = {
	detail?: Array<ValidationError>;
};



export type UserRequestSchema = {
	username: string;
	email: string;
	password: string;
};



export type UserResponseSchema = {
	id: number;
	username: string;
	email: string;
};



export type ValidationError = {
	loc: Array<string | number>;
	msg: string;
	type: string;
};

