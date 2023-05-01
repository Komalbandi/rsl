import { Component, OnInit } from '@angular/core';
import {ResultsService} from './services/result/results.service';
import {DrawService} from './services/draw/draw.service';
import {LatestResultInterface} from '../../interfaces';
import {LatestResultsCollection} from '../../models/collection/latest-results-collection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  latestResultsCollection?: LatestResultsCollection;

  constructor(private resultsService: ResultsService,private drawService:DrawService) {}

  ngOnInit(): void {
    this.getDrawService();
  }

  getDrawService() {
    this.resultsService.results.subscribe({
      next:(res: LatestResultInterface[])=>{
        this.latestResultsCollection = new LatestResultsCollection(res);
        console.log(this.latestResultsCollection);
      }
    });
  }
}
