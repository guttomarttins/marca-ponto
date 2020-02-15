import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CadastrarPjComponent, CadastroPjComponent } from './components';
import { MatInputModule, MatButtonModule, MatListModule, MatIconModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroPjService } from './services';

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
    MatSnackBarModule,
    SharedModule
  ],
  declarations: [
    CadastrarPjComponent,
    CadastroPjComponent
  ],
  providers: [
    CadastroPjService
  ]
})
export class CadastroPjModule { }
