import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProtocoloService } from 'src/app/shared/services';

@Component({
  selector: 'app-protocolo',
  templateUrl: './protocolo.component.html',
  styleUrls: ['./protocolo.component.scss']
})
export class ProtocoloComponent implements OnInit {

  public protocoloId: any;
  public idCliente: number = 0;
  public protocolo: any;
  public aplicacoes: any;

  constructor(
    private route: ActivatedRoute,
    private service: ProtocoloService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.protocoloId = this.route.snapshot.queryParams['protocolo'] || '0';
    this.idCliente = parseInt(this.route.snapshot.queryParams['cliente'] || '0');
    this.getProtocolo(this.protocoloId);
  }

  getProtocolo(id: any): void {
    this.protocolo = this.service.getProcoloPorId(id);
  }
}
