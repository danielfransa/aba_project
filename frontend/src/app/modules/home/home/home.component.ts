import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/shared/interfaces';
import { ClienteService } from 'src/app/shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  listaCliente: ICliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getAllClients().subscribe({
      next: (response) => this.listaCliente = response,
      error: (err) => console.error(err)
    })
  }
}
