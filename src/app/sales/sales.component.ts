import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

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
  displayedColumns = ['sale_number', 'user', 'description', 'placed_at', 'created_at', 'status', 'pricing_model', 'total'];
  dataSource: MatTableDataSource<Sale>;

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.getSales();
  }

  getSales(): void {
    this.salesService.getSales().subscribe(response => this.dataSource = new MatTableDataSource<Sale>(response.result));
  }

}
