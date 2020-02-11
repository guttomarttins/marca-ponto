import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Login } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  from: FormGroup; 

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
    //private router: Router
    ) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm(){
    this.from = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logar(){
    if(this.from.invalid){
      this.snackBar.open("Dados inválidos", "Erro", { duration: 5000 });
      return;
    }

    const login: Login = this.from.value;
    alert(JSON.stringify(login));
  }

}
