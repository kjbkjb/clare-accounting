import {NgModule} from '@angular/core';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';


@NgModule({
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class AppMaterialModule {
}
