import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar, PageEvent, Sort } from '@angular/material';
import { Lancamento, LancamentoService, HttpUtilService } from 'src/app/shared';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  dataSource: MatTableDataSource<Lancamento>;
  colunas: string[] = ['data', 'tipo', 'localizacao', 'acao'];
  funcionarioId: string;
  totalLancamentos: string;

  private pagina: number;
  private ordem: string;
  private direcao: string;

  constructor(
    private lancamentoService: LancamentoService,
    private httpUtil: HttpUtilService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.pagina = 0;
    this.ordemPadrao();
    this.exibirLancamentos();
  }

  ordemPadrao(){
    this.ordem = 'data';
    this.direcao = 'DESC';
  }

  exibirLancamentos(){
     this.funcionarioId = '2';

     this.lancamentoService.listarLancamentosPorFuncionario(
       this.funcionarioId, this.pagina, this.ordem, this.direcao)
       .subscribe(
         data => {
           this.totalLancamentos = data['data'].totalElements;
           const lancamentos = data['data'].content as Lancamento[];
           this.dataSource = new MatTableDataSource<Lancamento>(lancamentos); 
         },
         err => {
           const msg: string = "Erro obtendo lançamentos.";
           this.snackBar.open(msg, "Erro", { duration: 5000 });
         }
       );
  }

  removerLancamento(lancamentoId: string){
     alert(lancamentoId);
  }

  paginar(pageEvent: PageEvent){
    this.pagina = pageEvent.pageIndex;
    this.exibirLancamentos();
  }

  ordenar(sort: Sort){
    if(sort.direction == ''){
      this.ordemPadrao;
    } else {
      this.ordem = sort.active;
      this.direcao = sort.direction.toUpperCase();
    }
    this.exibirLancamentos();
  }

}
