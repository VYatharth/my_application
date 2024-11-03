import axios from 'axios';
import { isString } from 'lodash';
import { isBlob } from './commonUtil';

export type ApiRequestOptions = {
  readonly formData?: Record<string, unknown>;
};

export const getFormData = (data: ApiRequestOptions): FormData | undefined => {
  if (data.formData) {
    const formData = new FormData();

    const process = (key: string, value: unknown) => {
      if (isString(value) || isBlob(value)) {
        formData.append(key, value);
      } else {
        formData.append(key, JSON.stringify(value));
      }
    };

    Object.entries(data.formData)
      .filter(([, value]) => value !== undefined && value !== null)
      .forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => process(key, v));
        } else {
          process(key, value);
        }
      });

    return formData;
  }
  return undefined;
};

function createApiClient() {
  const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: { 'X-Custom-Header': 'foobar' },
  });
  return client;
}

export const apiClient = createApiClient();
