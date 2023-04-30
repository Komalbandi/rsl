import { Injectable } from '@angular/core';
import { PostService } from '../../../../providers/ajax/post.service';
import { endPoints } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  resultsRequest= {
    CompanyId: 'GoldenCasket',
    MaxDrawCount: 20,
    OptionalProductFilter: [
      'TattsLotto',
      'MonWedLotto',
      'OzLotto',
      'MonWedLotto',
      'Powerball',
      'Super66'
    ],
  };

  constructor(private postService: PostService) {}

  get results() {
    return this.postService.post(endPoints.results,this.resultsRequest);
  }
}
