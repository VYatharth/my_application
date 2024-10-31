export interface PortfolioResponse {
  personal_details?: unknown | null;
  skills?: unknown | null;
  achievements?: unknown | null;
  experience?: unknown | null;
  activities?: unknown | null;
  contact_info?: unknown | null;
}

export interface UploadFilesBody {
  [key: string]: unknown;
  upload_files: Array<Blob | File>;
}

export interface UploadFilesRequest {
  formData: UploadFilesBody;
}

export interface QueryTextRequest {
  text_content: string;
}

export interface QueryRequest {
  query: string;
}

export interface QuestionRequestData {
  question: string;
}

export interface Achievement {
  imageSrc: string;
  title: string;
  subtitle?: string;
  link?: string;
}

export interface Achievement {
  imageSrc: string;
  title: string;
  subtitle?: string;
  link?: string;
}

export enum  ColorMode {
  light,
  dark
}