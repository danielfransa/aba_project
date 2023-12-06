import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map} from 'rxjs';
import { ICliente } from 'src/app/shared/interfaces';
import { ClienteService } from 'src/app/shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listaCliente: ICliente[] = [];
  listaClienteAux: ICliente[] = [];
  campoBusca = new FormControl();

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getAllClients().subscribe({
      next: (response) => {
        this.listaCliente = response;
        this.listaClienteAux = response;
      },
      error: (err) => console.error(err),
    });
  }

  clientesEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(300),
    map((res) => {
      this.listaCliente = this.listaClienteAux.filter((cliente) =>
        cliente.name.toLowerCase().includes(res)
      );
    })
  );
}
