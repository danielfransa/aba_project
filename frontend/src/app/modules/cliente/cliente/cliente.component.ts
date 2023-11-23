import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { ICliente } from 'src/app/shared/interfaces';
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
  ) {}
  
  ngOnInit(): void {
    this.idClient = this.route.snapshot.paramMap.get('id') || '0';
    this.getClient(parseInt(this.idClient));
  }

  getClient(id: number): void {
    this.clienteService.getClientById(id).subscribe({
      next: (response) => {
        this.cliente = response;
        this.geResponsible(id);
      },
      error: (err) => console.error(err)
    })
  }

  geResponsible(id: number): void {
    this.clienteService.getResponsibleByClient(id).subscribe({
      next: (response) => {
        if(this.cliente !== null) {
          this.cliente.responsible = response;
        }
        console.log(this.cliente)
      },
      error: (err) => console.error(err)
    })
  }
}
