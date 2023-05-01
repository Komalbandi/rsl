import { Component, OnInit } from '@angular/core';
import {ResultsService} from './services/result/results.service';
import {DrawService} from './services/draw/draw.service';
import {LatestResultInterface} from '../../interfaces';
import {LatestResultsCollection} from '../../models/collection/latest-results-collection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  latestResultsCollection?: LatestResultsCollection;

  constructor(private resultsService: ResultsService,private drawService:DrawService, private router: Router) {}

  ngOnInit(): void {
    this.getDrawService();
  }

  getDrawService() {
    this.resultsService.results.subscribe({
      next:(res: LatestResultInterface[])=>{
        this.latestResultsCollection = new LatestResultsCollection(res);
      },
      error:()=>{
        this.router.navigate(['/serviceError']);
      }
    });
  }
}
