import { TestBed } from '@angular/core/testing';
import { DrawService } from './draw.service';
import {HttpClientModule} from '@angular/common/http';

describe('DrawService', () => {
  let service: DrawService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(DrawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
