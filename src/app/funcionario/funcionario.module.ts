import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FuncionarioComponent, LancamentoComponent, ListagemComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatListModule, MatTooltipModule, MatIconModule, MatButtonModule, MatSnackBarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule } from '@angular/material';
import { HttpUtilService, LancamentoService } from '../shared';

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
    LancamentoService
  ]
})
export class FuncionarioModule { }
