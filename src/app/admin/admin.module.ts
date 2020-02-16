import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent, CadastroComponent, AtualizacaoComponent, AdminComponent } from './components'; 
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [
    ListagemComponent, 
    CadastroComponent,
    AtualizacaoComponent,
    AdminComponent
  ]
})
export class AdminModule { }
