import { LatestResultsCollection } from './latest-results-collection';

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
  ]
  it('should create an instance', () => {
    expect(new LatestResultsCollection(datas)).toBeTruthy();
  });
});
