import { Component, OnInit } from '@angular/core';
import {ResultsService} from './services/result/results.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.getDrawService();
  }

  getDrawService() {
    this.resultsService.results.subscribe((res) => {
      console.log(res);
    });
  }
}
