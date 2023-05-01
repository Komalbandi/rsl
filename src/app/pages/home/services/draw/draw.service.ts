import { Injectable } from '@angular/core';
import { PostService } from '../../../../providers/ajax/post.service';
import { endPoints } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawService {

  drawServiceRequest = {
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

  get draw() {
    return this.postService.post(endPoints.draws, {});
  }
}
