import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CadastrarPjComponent, CadastroPjComponent } from './components';
import { MatInputModule, MatButtonModule, MatListModule, MatIconModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  declarations: [
    CadastrarPjComponent,
    CadastroPjComponent
  ]
})
export class CadastroPjModule { }
