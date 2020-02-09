import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, LogarComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LoginComponent, 
    LogarComponent]
})
export class LoginModule { }
