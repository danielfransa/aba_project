import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/shared/services';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  public cliente: any = null;
  public idClitente: string = '';

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
  ) {}
  
  ngOnInit(): void {
    this.idClitente = this.route.snapshot.paramMap.get('id') || '';

    this.cliente = this.clienteService.getClientePorId(this.idClitente);
  }
}
