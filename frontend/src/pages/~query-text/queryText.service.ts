import {
  QueryRequest,
  QueryTextRequest
} from '../../models';
import { apiClient } from '../../utils/apiUtil';

export class QueryTextService {
  public static async getArticle(): Promise<string> {
    const response = await apiClient.get<string>('/question/models');
    return response.data;
  }

  public static async preProcessText(data: QueryTextRequest): Promise<string> {
    const response = await apiClient.post('/question/processtext', data);
    return response.data;
  }

  public static async getQueryResponse(data: QueryRequest): Promise<string> {
    const response = await apiClient.post('/question/query', data);
    return response.data;
  }
}
