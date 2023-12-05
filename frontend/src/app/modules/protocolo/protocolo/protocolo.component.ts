import { AplicacaoService } from './../../../shared/services/aplicacao/aplicacao.service';
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
  displayedColumns: string[] = ['aplicacao', 'dataAplicacao', 'percentual'];

  constructor(
    private route: ActivatedRoute,
    private service: ProtocoloService,
    private router: Router,
    private aplicacaoService: AplicacaoService,
  ) {}

  ngOnInit(): void {
    this.protocoloId = this.route.snapshot.queryParams['protocolo'] || '0';
    this.idCliente = parseInt(this.route.snapshot.queryParams['cliente'] || '0');
    this.getProtocolo(this.protocoloId);
    this.getAplicacoes(this.protocoloId);
  }

  getProtocolo(id: any): void {
    this.protocolo = this.service.getProtocoloPorId(id, this.idCliente);
  }

  getAplicacoes(id:any): void {
    this.aplicacoes = this.aplicacaoService.getAplicacoes(id);
    console.log(this.aplicacoes);
  }
}
