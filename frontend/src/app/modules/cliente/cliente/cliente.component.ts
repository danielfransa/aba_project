import { ProtocoloService } from './../../../shared/services/protocolo/protocolo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponsavelService } from './../../../shared/services/responsavel/responsavel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente, IResponsavel } from 'src/app/shared/interfaces';
import { ClienteService } from 'src/app/shared/services';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  public cliente: ICliente | null = null;
  public idClient: number = 0;
  public formProtocolo!: FormGroup;
  public protocolos: any = [];

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private responsavelService: ResponsavelService,
    private router: Router,
    private formBuilder: FormBuilder,
    private protocoloService: ProtocoloService,
  ) {}
  
  ngOnInit(): void {
    this.idClient = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.getClient(this.idClient);
    this.createForm();
    this.getProtocolos();
  }

  getClient(id: number): void {
    this.clienteService.getClientById(id).subscribe({
      next: (response) => {
        this.cliente = response;
        this.getResponsible(id);
      },
      error: (err) => console.error(err)
    })
  }

  getResponsible(id: number): void {
    this.responsavelService.getResponsibleByClient(id).subscribe({
      next: (response) => {
        if(this.cliente !== null) {
          this.cliente.responsible = response;
        }
      },
      error: (err) => console.error(err)
    })
  }

  acessarResponsavel(event?: IResponsavel): void {
    this.router.navigate(
      [`/cliente/${this.idClient}/editar-responsavel`],
      {
        queryParams: {
          cliente: this.idClient,
          responsavel: event?.id || 0,
        }
      }
    )
  }

  acessarProtocolo(event?: IResponsavel): void {
    this.router.navigate(
      [`/cliente/${this.idClient}/editar-responsavel`],
      {
        queryParams: {
          cliente: this.idClient,
          responsavel: event?.id || 0,
        }
      }
    )
  }

  createForm(): void {
    this.formProtocolo = this.formBuilder.group({
      name: [null, [Validators.required]]
    })
  }

  getProtocolos(): void {
    this.protocolos = this.protocoloService.getProtocolos(this.idClient);
  }

  onCadastrar(): void {
    if(this.formProtocolo.invalid) return;

    const procolo = this.formProtocolo.getRawValue();
    procolo.id = uuidv4();
    procolo.status = 1;
    procolo.idCliente = this.idClient;
    this.protocoloService.saveProtocolo(procolo);
    this.getProtocolos();
  }

  onCancelar(): void {
    this.formProtocolo.reset();
  }
}
