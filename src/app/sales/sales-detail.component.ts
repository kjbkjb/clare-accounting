import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SalesService} from './sales.service';

@Component({
  selector: 'app-sales-detail',
  templateUrl: './sales-detail.component.html',
  styleUrls: ['./sales-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SalesDetailComponent implements OnInit {

  constructor(private salesService: SalesService) {
  }

  ngOnInit() {
  }

}
