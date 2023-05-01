import { LatestResultInterface } from '../../interfaces';
import { LatestResultsModel } from '../../models/latestResults/latest-results-model';
export class LatestResultsCollection {
  private latesResultsDatas?: LatestResultsModel[];
  constructor(datas: LatestResultInterface[]) {
    if(datas)
    {
      this.latesResultsDatas = [];
      datas.forEach((data: LatestResultInterface) => {
        this.latesResultsDatas!.push(new LatestResultsModel(data));
      });
    }
  }

  get all(){
    return this.latesResultsDatas;
  }
}
