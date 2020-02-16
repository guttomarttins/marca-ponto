import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent, ListagemComponent, CadastroComponent, AtualizacaoComponent } from './components';

export const AdminRoutes: Routes = [
   {
       path: 'admin',
       component: AdminComponent,
       children: [
           {
               path: '',
               component: ListagemComponent
           },
           {
               path: 'cadastro',
               component: CadastroComponent
           },
           {
               path: 'atualizacao/:lancamentoId',
               component: AtualizacaoComponent
           }
       ]
   }
]

@NgModule({
   imports: [
       RouterModule.forChild(AdminRoutes)
   ],
   exports: [
       RouterModule
   ]
})

export class AdminRoutingModule{
}