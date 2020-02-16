import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';
import { PtBrMatPaginatorIntl } from './pt-br-mat-paginator-intl';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MascaraDirective
  ],
  exports: [
    MascaraDirective
  ],
  providers: [
    PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
