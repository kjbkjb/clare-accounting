import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SummaryReport} from './summary-report';
import {DashboardService} from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  report: SummaryReport

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getReport()
  }

  getReport(): void {
    this.dashboardService.getReport()
      .subscribe(response => this.report = response.result);

  }

}
