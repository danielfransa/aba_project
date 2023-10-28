import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ClienteComponent
  ]
})
export class ClienteModule { }
