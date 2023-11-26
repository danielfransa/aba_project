import { Component, OnDestroy } from '@angular/core';
import { DataClienteService } from '../service/data-cliente.service';

@Component({
  selector: 'app-cadastro',
  template: '<router-outlet></router-outlet>',
})
export class CadastroComponent implements OnDestroy {
  constructor(private dataService: DataClienteService) {}

  ngOnDestroy(): void {
    this.dataService.removeClient();
  }
}
