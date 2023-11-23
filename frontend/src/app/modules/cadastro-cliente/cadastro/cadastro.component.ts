import { Component, OnDestroy } from '@angular/core';
import { DataClienteService } from '../service/data-cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnDestroy {
  constructor(private dataService: DataClienteService) {}

  ngOnDestroy(): void {
    this.dataService.removeClient();
  }
}
