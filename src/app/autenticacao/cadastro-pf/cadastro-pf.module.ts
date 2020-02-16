import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPfComponent, CadastroPfComponent } from './components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatListModule, MatTooltipModule, MatSnackBarModule, MatIconModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastrarPfService } from './services';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ],
  declarations: [
    CadastrarPfComponent,
    CadastroPfComponent
  ],
  providers: [ 
    CadastrarPfService
  ]    
})
export class CadastroPfModule { }
