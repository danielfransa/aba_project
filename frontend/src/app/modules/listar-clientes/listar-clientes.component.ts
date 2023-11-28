import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/services';
import { ICliente } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss'],
})
export class ListarClienteComponent implements OnInit {
  public clientes: ICliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes(): void {
    this.clienteService.getAllClients().subscribe({
      next: (response) => {
        this.clientes = response;
      },
      error: (err) => console.error(err),
    });
  }
}
