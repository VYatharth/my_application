import { PortfolioResponse } from '../../models';
import { apiClient } from '../../utils/apiUtil';

export class PortfolioService {
  public static getPortfolio(): Promise<PortfolioResponse> {
    return apiClient.get('/portfolio/');
  }
}
