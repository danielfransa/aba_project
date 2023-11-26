import { NgModule } from '@angular/core';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroResponsavelComponent } from './cadastro-responsavel/cadastro-responsavel.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormResponsavelComponent } from 'src/app/shared/components/form-responsavel/form-responsavel.component';
import { ExpansionPanelResponsavelComponent } from 'src/app/shared/components/expansion-panel-responsavel/expansion-panel-responsavel.component';

@NgModule({
  declarations: [
    CadastroClienteComponent,
    CadastroResponsavelComponent,
    CadastroComponent
  ],
  imports: [
    SharedModule,
    FormResponsavelComponent,
    ExpansionPanelResponsavelComponent,
  ],
  exports: [
    CadastroClienteComponent,
  ]
})
export class CadastroClienteModule { }
