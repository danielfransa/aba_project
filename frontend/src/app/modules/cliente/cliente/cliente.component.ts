import { ResponsavelService } from './../../../shared/services/responsavel/responsavel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente, IResponsavel } from 'src/app/shared/interfaces';
import { ClienteService } from 'src/app/shared/services';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  public cliente: ICliente | null = null;
  public idClient: string = '';

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private responsavelService: ResponsavelService,
    private router: Router,
  ) {}
  
  ngOnInit(): void {
    this.idClient = this.route.snapshot.paramMap.get('id') || '0';
    this.getClient(parseInt(this.idClient));
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
}
