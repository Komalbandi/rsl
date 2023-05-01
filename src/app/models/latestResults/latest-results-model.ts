import { LatestResultInterface } from '../../interfaces';
export class LatestResultsModel {
  private latesResultData: LatestResultInterface;
  constructor(data: LatestResultInterface) {
    this.latesResultData = data;
  }

  get displayName(){
    return this.latesResultData.DrawDisplayName;
  }

  get logoImage(){
    return this.latesResultData.DrawLogoUrl;
  }

  get drawDate(){
    return this.latesResultData.DrawDate;
  }

  get drawNumber(){
    return this.latesResultData.DrawNumber;
  }

}
