import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import * as moment from 'moment';
import { Router } from '@angular/router';
import { Tipo } from 'src/app/shared';

declare var navigator: any;

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  private dataAtualEn: string;
  dataAtual: string;
  geoLocation: string;
  ultimoTipoLancamento: string;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
     this.dataAtual = moment().format('DD/MM/YYYY HH:mm:ss');
     this.dataAtualEn = moment().format('YYYY-MM-DD HH:mm:ss');
     this.obterGeoLocation();
     this.ultimoTipoLancamento = '';
     this.obterUltimoLancamento();
  }

  obterGeoLocation(): string {
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(position =>
          this.geoLocation = `${position.coords.latitude},${position.coords.longitude}`);
    }
    return '';
  }

  iniciarTrabalho() {
    this.cadastrar(Tipo.INICIO_TRABALHO);
  }

  terminarTrabalho() {
    this.cadastrar(Tipo.TERMINO_TRABALHO);
  }

  iniciarAlmoco() {
    this.cadastrar(Tipo.INICIO_ALMOCO);
  }

  terminarAlmoco() {
    this.cadastrar(Tipo.TERMINO_ALMOCO);
  }
  
  obterUltimoLancamento() {
    this.ultimoTipoLancamento = '';
  }
  
  cadastrar(tipo: Tipo) {
    alert(`Tipo: ${tipo}, dataAtualEn: ${this.dataAtualEn},
       geolocation: ${this.geoLocation}`);
  }

  obterUrlMapa(): string{
    return "https://www.google.com/maps/search/?api=1&query=" +
        this.geoLocation;
  }
  
  exibirInicioTrabalho(): boolean{
    return this.ultimoTipoLancamento == "" ||
       this.ultimoTipoLancamento == Tipo.TERMINO_TRABALHO;
  }

  exibirTerminoTrabalho(): boolean{
    return this.ultimoTipoLancamento == Tipo.INICIO_TRABALHO ||
       this.ultimoTipoLancamento == Tipo.TERMINO_ALMOCO;
  }

  exibirInicioAlmoco(): boolean{
    return this.ultimoTipoLancamento == Tipo.INICIO_TRABALHO;
  }

  exibirTerminoAlmoco(): boolean{
    return this.ultimoTipoLancamento == Tipo.TERMINO_ALMOCO;
  }

}
