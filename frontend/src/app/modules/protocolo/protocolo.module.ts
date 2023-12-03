import { NgModule } from '@angular/core';
import { ProtocoloComponent } from './protocolo/protocolo.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProtocoloComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProtocoloComponent
  ]
})
export class ProtocoloModule { }
