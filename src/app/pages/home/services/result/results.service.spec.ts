import { TestBed } from '@angular/core/testing';
import { ResultsService } from './results.service';
import {HttpClientModule} from '@angular/common/http';

describe('ResultsService', () => {
  let service: ResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
