import { Injectable } from '@angular/core';
import { PostService } from '../../../../providers/ajax/post.service';
import { endPoints } from '../../../../../environments/environment';
import {pipe,map, Observable} from 'rxjs';
import {LatestResultInterface} from '../../../../interfaces';
import {PostResultInterface} from '../../interfaces/post-result-interface';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  resultsRequest = {
    CompanyId: 'GoldenCasket',
    MaxDrawCount: 20,
    OptionalProductFilter: [
      'TattsLotto',
      'MonWedLotto',
      'OzLotto',
      'MonWedLotto',
      'Powerball',
      'Super66',
    ],
  };

  constructor(private postService: PostService) {}

  get results(): Observable<LatestResultInterface[]> {
    return this.postService
      .post<PostResultInterface>(endPoints.results, this.resultsRequest)
      .pipe(map((res: PostResultInterface) => res.DrawResults));
  }
}
