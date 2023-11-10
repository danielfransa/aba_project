import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
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
