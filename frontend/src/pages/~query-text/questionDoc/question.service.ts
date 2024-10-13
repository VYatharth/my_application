import { QuestionRequestData, UploadFilesRequest } from '../../../models';
import { apiClient, getFormData } from '../../../utils/apiUtil';

export class QuestionService {
  public static async getArticle(): Promise<string> {
    const response = await apiClient.get<string>('/pdf/models');
    return response.data;
  }

  public static async Uploadfiles(data: UploadFilesRequest): Promise<string> {
    const formData = getFormData({ formData: data.formData });
    return apiClient.post('/pdf/uploadfiles', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  public static async getQuestionResponse(data: QuestionRequestData): Promise<string> {
    const response = await apiClient.get('/pdf/question', {
      params: {
        question: data.question,
      },
    });
    return response.data;
  }
}
