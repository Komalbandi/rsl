import { LatestResultInterface } from '../../interfaces';
export class LatestResultsModel {
  private latesResultData: LatestResultInterface;
  constructor(data: LatestResultInterface) {
    this.latesResultData = data;
  }
}
