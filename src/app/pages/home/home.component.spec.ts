import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {HttpClientModule} from '@angular/common/http';
import {ResultsService} from './services/result/results.service';
import {LatestResultsCollection} from '../../models/collection/latest-results-collection';
import {LatestResultsModel} from '../../models/latestResults/latest-results-model';
import {of} from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let resultsService: ResultsService;
  let resultsServiceSpy: jasmine.SpyObj<ResultsService>;
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    resultsService = TestBed.inject(ResultsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getData',()=>{
    spyOnProperty(resultsService,'results').and.returnValue(of(datas));
    component.getDrawService();
    expect(((component.latestResultsCollection as LatestResultsCollection).all as LatestResultsModel[])[0].displayName).toEqual(datas[0].DrawDisplayName);
    expect(((component.latestResultsCollection as LatestResultsCollection).all as LatestResultsModel[])[0].logoImage).toEqual(datas[0].DrawLogoUrl);
    expect(((component.latestResultsCollection as LatestResultsCollection).all as LatestResultsModel[])[0].drawDate).toEqual(datas[0].DrawDate);
    expect(((component.latestResultsCollection as LatestResultsCollection).all as LatestResultsModel[])[0].drawNumber).toEqual(datas[0].DrawNumber);

    expect(((component.latestResultsCollection as LatestResultsCollection).all as LatestResultsModel[])[1].displayName).toEqual(datas[1].DrawDisplayName);
    expect(((component.latestResultsCollection as LatestResultsCollection).all as LatestResultsModel[])[1].logoImage).toEqual(datas[1].DrawLogoUrl);
    expect(((component.latestResultsCollection as LatestResultsCollection).all as LatestResultsModel[])[1].drawDate).toEqual(datas[1].DrawDate);
    expect(((component.latestResultsCollection as LatestResultsCollection).all as LatestResultsModel[])[1].drawNumber).toEqual(datas[1].DrawNumber);
  });
});
