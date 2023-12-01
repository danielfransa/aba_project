import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/shared/interfaces';
import { ClienteService } from 'src/app/shared/services';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.scss'],
})
export class EditClienteComponent implements OnInit {
  public form!: FormGroup;
  public cliente: ICliente | null = null;
  public idClient: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.idClient = this.route.snapshot.paramMap.get('id') || '0';
    this.getClient(parseInt(this.idClient));
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
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
    });
  }

  getClient(id: number): void {
    this.clienteService.getClientById(id).subscribe({
      next: (response) => {
        this.cliente = response;
        this.createForm();
      },
      error: (err) => console.error(err)
    })
  }

  onEdit() {
    const cliente = this.form.getRawValue() as ICliente;
    this.clienteService.updateClient(cliente, this.cliente?.id || 0).subscribe({
      next: (response) => {
        if(response) {
          this.router.navigate(['/cliente', response.id]);
        }
      },
      error: (err) => console.error(err)
    })
  }
}
