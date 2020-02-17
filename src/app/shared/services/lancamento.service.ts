import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import { environment as env} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Lancamento } from '../models';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';


@Injectable()

export class LancamentoService {

  private readonly PATH: string = 'lancamentos';
  private readonly PATH_ULTIMO_LANC: string = '/funcionario/{funcionarioId}/ultimo';
  private readonly PATH_LACAMENTOS: string = '/funcionario/{funcionarioId}';
  private readonly PATH_TODOS_LANC: string = '/funcionario/{funcionarioId}/todos';

  constructor(
    private http: HttpClient,
    private httpUtil: HttpUtilService) { }

  buscarUltimoLancamento(): Observable<any> {
    return this.http.get(
      env.baseApiUrl + this.PATH +
      this.PATH_ULTIMO_LANC.replace(
        '{funcionarioId}', this.httpUtil.obterIdUsuario()),
        this.httpUtil.headers()
      );
  }  

  cadastrar(lancamento: Lancamento): Observable<any>{
     return this.http.post(
       env.baseApiUrl + this.PATH, 
       lancamento,
       this.httpUtil.headers()
     );  
  }

  listarTodosLancamentos(): Observable<any> {
    return this.http.get(
      env.baseApiUrl + this.PATH +
      this.PATH_TODOS_LANC.replace(
        '{funcionarioId}', this.httpUtil.obterIdUsuario()),
        this.httpUtil.headers()
      );
  }

  listarLancamentosPorFuncionario(
    funcionarioId: string,
    pagina: number,
    ordem: string,
    direcao: string): Observable<any>{
    
      const url: string = env.baseApiUrl + this.PATH +
      this.PATH_LACAMENTOS.replace('{funcionarioId}', funcionarioId);

      const params: string = "?page=" + pagina + '&ord=' + ordem +
      '&dir=' + direcao;

      return this.http.get(url + params, this.httpUtil.headers());
  }
}
