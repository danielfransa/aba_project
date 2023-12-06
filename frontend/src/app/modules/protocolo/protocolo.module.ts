import { NgModule } from '@angular/core';
import { ProtocoloComponent } from './protocolo/protocolo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AplicacaoComponent } from './aplicacao/aplicacao.component';



@NgModule({
  declarations: [
    ProtocoloComponent,
    AplicacaoComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProtocoloComponent
  ]
})
export class ProtocoloModule { }
