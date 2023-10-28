import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  listaCliente: any[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.listaCliente = this.clienteService.getClientes();
    console.log(this.clienteService.getClientes());
  }
}
