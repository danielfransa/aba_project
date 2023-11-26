import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExpansionPanelResponsavelComponent } from 'src/app/shared/components/expansion-panel-responsavel/expansion-panel-responsavel.component';
import { EditResponsavelClientComponent } from './edit-responsavel-client/edit-responsavel-client.component';
import { InicioClienteComponent } from './inicio-cliente/inicio-cliente.component';
import { FormResponsavelComponent } from 'src/app/shared/components/form-responsavel/form-responsavel.component';



@NgModule({
  declarations: [
    ClienteComponent,
    EditResponsavelClientComponent,
    InicioClienteComponent
  ],
  imports: [
    SharedModule,
    ExpansionPanelResponsavelComponent,
    FormResponsavelComponent,
  ],
  exports: [
    ClienteComponent
  ]
})
export class ClienteModule { }
