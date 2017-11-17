import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SalesService} from './sales.service';
import {Sale} from './sale';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sales-detail',
  templateUrl: './sales-detail.component.html',
  styleUrls: ['./sales-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SalesDetailComponent implements OnInit {

  sale: Sale;

  constructor(private salesService: SalesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getSale()
  }

  getSale(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.salesService.getSale(id)
      .subscribe(response => this.sale = response.result);
  }

}
