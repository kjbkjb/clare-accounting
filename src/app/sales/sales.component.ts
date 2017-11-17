import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SalesService} from './sales.service';
import {Sale} from './sale';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SalesComponent implements OnInit {
  sales: Sale[];

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.getSales();
  }

  getSales(): void {
    this.salesService.getSales().subscribe(response => this.sales = response.result);
  }
}
