import {NgModule} from '@angular/core';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatCardModule
} from '@angular/material';


@NgModule({
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatCardModule
  ]
})
export class AppMaterialModule {
}
