import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CadastroClienteComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    CadastroClienteComponent,
  ]
})
export class CadastroClienteModule { }
