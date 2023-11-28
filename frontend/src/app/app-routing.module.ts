import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { CadastroClienteComponent } from './modules/cadastro-cliente/cadastro-cliente/cadastro-cliente.component';
import { ClienteComponent } from './modules/cliente/cliente/cliente.component';
import { CadastroResponsavelComponent } from './modules/cadastro-cliente/cadastro-responsavel/cadastro-responsavel.component';
import { CadastroComponent } from './modules/cadastro-cliente/cadastro/cadastro.component';
import { ListarClienteComponent } from './modules/listar-clientes/listar-clientes.component'; 

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    component: CadastroComponent,
    path: 'cadastro-cliente',
    children: [
      {
        path: '',
        component: CadastroClienteComponent,
      },
      {
        path: 'cadastro-responsavel',
        component: CadastroResponsavelComponent,
      }
    ]
  },
  {
    path: 'cliente/:id',
    component: ClienteComponent
  },
  {
    path: 'listar-clientes',
    component: ListarClienteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
