import { LatestResultsCollection } from './latest-results-collection';
import { LatestResultsModel } from '../../models/latestResults/latest-results-model';

describe('LatestResultsCollection', () => {
  const datas=[
    {
      "ProductId": "Super66",
      "DrawNumber": 3351,
      "DrawDisplayName": "Super 66 Draw 3351",
      "DrawDate": "2013-08-31T00:00:00",
      "DrawLogoUrl": "http://tim.media.tatts.com/TattsServices/Lotto/Products/Super66_v1.png",
      "DrawType": "BaseWeek",
      "Div1Amount": 1.0000,
      "IsDiv1Estimated": false,
      "IsDiv1Unknown": true,
      "DrawCloseDateTimeUTC": "2013-08-31T09:35:00"
    },
    {
      "ProductId": "Pools",
      "DrawNumber": 1466,
      "DrawDisplayName": "The Pools Draw 1466",
      "DrawDate": "2013-08-31T00:00:00",
      "DrawLogoUrl": "http://tim.media.tatts.com/TattsServices/Lotto/Products/ThePools_v1.png",
      "DrawType": "BaseWeek",
      "Div1Amount": 1.0000,
      "IsDiv1Estimated": false,
      "IsDiv1Unknown": true,
      "DrawCloseDateTimeUTC": "2013-08-31T09:35:00"
    }
  ];
  it('should create an instance', () => {
    expect(new LatestResultsCollection(datas)).toBeTruthy();
  });

  it('should return all datas',()=>{
    expect(((new LatestResultsCollection(datas)).all as LatestResultsModel[]).length).toEqual(datas.length);

    expect(((new LatestResultsCollection(datas)).all as LatestResultsModel[])[0].displayName).toEqual(datas[0].DrawDisplayName);
    expect(((new LatestResultsCollection(datas)).all as LatestResultsModel[])[0].logoImage).toEqual(datas[0].DrawLogoUrl);
    expect(((new LatestResultsCollection(datas)).all as LatestResultsModel[])[0].drawDate).toEqual(datas[0].DrawDate);
    expect(((new LatestResultsCollection(datas)).all as LatestResultsModel[])[0].drawNumber).toEqual(datas[0].DrawNumber);

    expect(((new LatestResultsCollection(datas)).all as LatestResultsModel[])[1].displayName).toEqual(datas[1].DrawDisplayName);
    expect(((new LatestResultsCollection(datas)).all as LatestResultsModel[])[1].logoImage).toEqual(datas[1].DrawLogoUrl);
    expect(((new LatestResultsCollection(datas)).all as LatestResultsModel[])[1].drawDate).toEqual(datas[1].DrawDate);
    expect(((new LatestResultsCollection(datas)).all as LatestResultsModel[])[1].drawNumber).toEqual(datas[1].DrawNumber);
  });
});
