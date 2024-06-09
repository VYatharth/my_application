export type HTTPValidationError = {
	detail?: Array<ValidationError>;
};



export type LoginRequestSchema = {
	email: string;
	password: string;
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

