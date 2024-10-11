export const isBlob = (value: any): value is Blob => {
  return value instanceof Blob;
};

export const isFormData = (value: unknown): value is FormData => {
  return value instanceof FormData;
};
