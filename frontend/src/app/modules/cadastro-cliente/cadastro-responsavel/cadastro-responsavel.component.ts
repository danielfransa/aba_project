import { Component, OnInit } from '@angular/core';
import { DataClienteService } from '../service/data-cliente.service';
import { ICliente } from 'src/app/shared/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-responsavel',
  templateUrl: './cadastro-responsavel.component.html',
  styleUrls: ['./cadastro-responsavel.component.scss'],
})
export class CadastroResponsavelComponent implements OnInit {
  public form!: FormGroup;
  public cliente: ICliente | null = null;

  constructor(
    private dataService: DataClienteService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    
    const cli: ICliente = {
      nome: 'João da Silva',
      dataNascimento: '2001-12-09',
      sexo: 'Masculino',
      cpf: '000.000.000-00',
      telefone: '19999999999',
      email: 'joao@gmail.com',
      grauEscolaridade: 'Cursando ensino médio',
      infoMedicas: 'N/A',
      medicamentosEmUso: 'N/A',
      dadosTratamento: 'N/A',
      responsaveis: [],
      endereco: {
        cep: '12134',
        rua: 'Av. Basil',
        numero: 123,
        complemento: 'sgdsfdfd',
        bairro: 'fdsfd',
        cidade: 'araras',
        estado: 'dfdf',
      },
    };

    this.dataService.cliente.subscribe({
      next: (data) => this.cliente = data
    });

    this.dataService.setClient(cli)
  }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      grauParentesco: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        rua: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        complemento: [null || ''],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]],
      }),
    });
  }

  public addResponsavel(): void {
    if(this.cliente) {
      const responsavel = this.form.getRawValue();
      this.cliente.responsaveis?.push(responsavel);
      this.dataService.setClient(this.cliente);
      this.router.navigate(['/cadastro-cliente'])
    }
  }
}
