import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { CadastroClienteComponent } from './modules/cadastro-cliente/cadastro-cliente/cadastro-cliente.component';
import { ClienteComponent } from './modules/cliente/cliente/cliente.component';
import { CadastroResponsavelComponent } from './modules/cadastro-cliente/cadastro-responsavel/cadastro-responsavel.component';
import { CadastroComponent } from './modules/cadastro-cliente/cadastro/cadastro.component';
import { EditResponsavelClientComponent } from './modules/cliente/edit-responsavel-client/edit-responsavel-client.component';
import { InicioClienteComponent } from './modules/cliente/inicio-cliente/inicio-cliente.component';
import { EditClienteComponent } from './modules/cliente/edit-cliente/edit-cliente.component';

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
    component: InicioClienteComponent,
    children: [
      {
        path: '',
        component: ClienteComponent,
      },
      {
        path: 'editar-responsavel',
        component: EditResponsavelClientComponent
      },
      {
        path: 'editar-cliente/:id',
        component: EditClienteComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
