import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/shared/services';
import { DataClienteService } from '../service/data-cliente.service';
import { ICliente } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss'],
})
export class CadastroClienteComponent implements OnInit {
  public formCadastro!: FormGroup;
  public cliente: ICliente | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private dataService: DataClienteService,
  ) {
    this.dataService.cliente.subscribe({
      next: (data) => {
        if(data) {
          this.cliente = data;
          console.log(data);
        }
      }
    })
  }

  ngOnInit(): void {
    this.createForm();
  }

  save() {
    const cliente = this.formCadastro.getRawValue();
    cliente.id = self.crypto.randomUUID();
    this.clienteService.saveCliente(cliente);
    this.formCadastro.reset();
    this.router.navigate(['/home']);
  }

  createForm(): void {
    this.formCadastro = this.formBuilder.group({
      nome: [ this.cliente?.nome || '', [Validators.required] ],
      email: [this.cliente?.email || '', [Validators.required, Validators.email]],
      dataNascimento: [this.cliente?.dataNascimento || '', [Validators.required]],
      sexo: [this.cliente?.sexo || '', [Validators.required]],
      cpf: [this.cliente?.cpf || '', [Validators.required]],
      telefone: [this.cliente?.telefone || '', [Validators.required]],
      grauEscolaridade: [this.cliente?.grauEscolaridade || ''],
      infoMedicas: [this.cliente?.infoMedicas || ''],
      medicamentosEmUso: [this.cliente?.medicamentosEmUso || ''],
      dadosTratamento: [this.cliente?.dadosTratamento || ''],
      endereco: this.formBuilder.group({
        cep: [this.cliente?.endereco.cep || '', [Validators.required]],
        rua: [this.cliente?.endereco.rua || '', [Validators.required]],
        numero: [this.cliente?.endereco.numero || '', [Validators.required]],
        complemento: [this.cliente?.endereco.complemento || ''],
        bairro: [this.cliente?.endereco.bairro || '', [Validators.required]],
        cidade: [this.cliente?.endereco.cidade || '', [Validators.required]],
        estado: [this.cliente?.endereco.estado || '', [Validators.required]],
      }),
      responsaveis: this.formBuilder.array(this.cliente?.responsaveis || []),
    });
  }

  addResponsavel() {
    this.cliente = this.formCadastro.value
    this.dataService.setClient(this.formCadastro.value)
    this.router.navigate(['/cadastro-cliente/cadastro-responsavel'])
  }
  
}
