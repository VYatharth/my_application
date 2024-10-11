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

export interface QuestionRequestData {
  question: string;
}
