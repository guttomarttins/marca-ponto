import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent, CadastroComponent, AtualizacaoComponent, AdminComponent } from './components'; 
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatListModule, MatTooltipModule, MatIconModule, MatSnackBarModule, MatTableModule, MatSelectModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule, MatPaginatorModule, MatSortModule, MatPaginatorIntl, MAT_DATE_LOCALE } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { LancamentoService, HttpUtilService, PtBrMatPaginatorIntl, FuncionarioService } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule
  ],
  declarations: [
    ListagemComponent, 
    CadastroComponent,
    AtualizacaoComponent,
    AdminComponent
  ],
  providers: [
    LancamentoService,
    HttpUtilService,
    MatPaginatorIntl,
    FuncionarioService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-Br' },
    { provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl }
  ]
})
export class AdminModule { }
