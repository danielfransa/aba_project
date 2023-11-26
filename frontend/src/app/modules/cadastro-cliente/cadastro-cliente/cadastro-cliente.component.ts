import { ResponsavelService } from './../../../shared/services/responsavel/responsavel.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/shared/services';
import { DataClienteService } from '../service/data-cliente.service';
import { ICliente, IResponsavel } from 'src/app/shared/interfaces';

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
    private responsavelService: ResponsavelService,
  ) {
    this.dataService.cliente.subscribe({
      next: (data) => {
        if(data) {
          this.cliente = data;
        }
      }
    })
  }

  ngOnInit(): void {
    this.createForm();
  }

  save() {
    const cliente = this.formCadastro.getRawValue();
    this.clienteService.saveClient(cliente).subscribe({
      next: (resp) => {
        if(resp.id) {
          this.cliente?.responsible?.forEach( (item) => {
            this.responsavelService.saveResponsible(item, resp.id!).subscribe({
              error: (err) => console.error(err)
            })
          });
          this.formCadastro.reset();
          this.router.navigate(['/home']);
        }
      },
      error: (err) => console.error(err)
    })
  }

  createForm(): void {
    this.formCadastro = this.formBuilder.group({
      name: [ this.cliente?.name || '', [Validators.required] ],
      email: [this.cliente?.email || '', [Validators.required, Validators.email]],
      brithday: [this.cliente?.brithday || '', [Validators.required]],
      gender: [this.cliente?.gender || '', [Validators.required]],
      cpf: [this.cliente?.cpf || '', [Validators.required]],
      telephone: [this.cliente?.telephone || '', [Validators.required]],
      education_level: [this.cliente?.education_level || ''],
      medical_informations: [this.cliente?.medical_informations || ''],
      medicines_in_use: [this.cliente?.medicines_in_use || ''],
      processing_information: [this.cliente?.processing_information || ''],
      cep: [this.cliente?.cep || '', [Validators.required]],
      street: [this.cliente?.street || '', [Validators.required]],
      number: [this.cliente?.number || '', [Validators.required]],
      complement: [this.cliente?.complement || ''],
      neighborhood: [this.cliente?.neighborhood || '', [Validators.required]],
      city: [this.cliente?.city || '', [Validators.required]],
      state: [this.cliente?.state || '', [Validators.required]],
      responsible: this.formBuilder.array(this.cliente?.responsible || []),
    });
  }

  addResponsavel(event?: IResponsavel): void {
    this.cliente = this.formCadastro.getRawValue();
    this.dataService.setClient(this.formCadastro.value)
    if(event) {
      const index = this.cliente?.responsible?.indexOf(event);
      this.router.navigate(
        ['/cadastro-cliente/cadastro-responsavel'],
        {
          queryParams: {
            responsavel: index
          }
        }
      );
      return;
    }

    this.router.navigate(['/cadastro-cliente/cadastro-responsavel']);
  }

  removeResponsavel(event: IResponsavel): void {
    if(this.cliente && this.cliente?.responsible){
      const index = this.cliente?.responsible?.indexOf(event);
      this.cliente?.responsible.splice(index, 1);
      this.formCadastro.get('responsible')?.value.splice(index, 1);
      this.dataService.setClient(this.cliente);
    }
  }
  
}
