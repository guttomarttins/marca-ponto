import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FuncionarioComponent, LancamentoComponent, ListagemComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatListModule, MatTooltipModule, MatIconModule, MatButtonModule, MatSnackBarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatPaginatorIntl } from '@angular/material';
import { HttpUtilService, LancamentoService, PtBrMatPaginatorIntl } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule
  ],
  declarations: [
    ListagemComponent, 
    LancamentoComponent,
    FuncionarioComponent
  ],
  providers: [
    HttpUtilService,
    LancamentoService,
    { provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl}
  ]
})
export class FuncionarioModule { }
