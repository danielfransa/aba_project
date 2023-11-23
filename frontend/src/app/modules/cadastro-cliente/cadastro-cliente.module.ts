import { NgModule } from '@angular/core';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroResponsavelComponent } from './cadastro-responsavel/cadastro-responsavel.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    CadastroClienteComponent,
    CadastroResponsavelComponent,
    CadastroComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    CadastroClienteComponent,
  ]
})
export class CadastroClienteModule { }
