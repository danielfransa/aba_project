import { AplicacaoService } from './../../../shared/services/aplicacao/aplicacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProtocoloService } from 'src/app/shared/services';

@Component({
  selector: 'app-aplicacao',
  templateUrl: './aplicacao.component.html',
  styleUrls: ['./aplicacao.component.scss'],
})
export class AplicacaoComponent implements OnInit {
  public protocoloId: any;
  public idCliente: number = 0;
  public protocolo: any;
  public tentativaAtual: number = 1;
  public maxiTentativas: number = 10;
  public form!: FormGroup;
  public resultados: any = [];

  constructor(
    private route: ActivatedRoute,
    private service: ProtocoloService,
    private formBuilder: FormBuilder,
    private router: Router,
    private aplicacaoService: AplicacaoService,
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.protocoloId = this.route.snapshot.queryParams['protocolo'] || '0';
    this.idCliente = parseInt(this.route.snapshot.queryParams['cliente'] || '0');
    this.getProtocolo(this.protocoloId);
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      result: [null, [Validators.required]],
      help: [null],
      comments: [null],
    });
  }

  getProtocolo(id: any): void {
    this.protocolo = this.service.getProtocoloPorId(id, this.idCliente);
  }

  proximaTentativa(): void {
    if (this.tentativaAtual < this.maxiTentativas) {
      const tentativa = this.form.getRawValue();
      this.resultados.push(tentativa);
      this.tentativaAtual++;
      this.form.reset();
    }
  }

  abortar(): void {
    this.router.navigate(['/protocolo'], {
        queryParams: {
          cliente: this.idCliente,
          protocolo: this.protocoloId,
        },
      }
    );
  }

  finalizar() {
    const ultimaTentativa = this.form.getRawValue();
    this.resultados.push(ultimaTentativa);
    const successfulAttempts = this.resultados.filter(
      (resultado: any) => resultado.result === 'Sucesso'
    ).length;
    const por = (successfulAttempts / this.resultados.length) * 100 || 0;
    const aplicacao = {
      id: self.crypto.randomUUID(),
      idProtocolo: this.protocoloId,
      idCliente: this.idCliente,
      resultados: this.resultados,
      dataAplicacao: new Date(),
      parcialDeSucesso: por,
    };
    this.aplicacaoService.saveAplicacao(aplicacao);
    console.log('Resultados salvos no localStorage.', aplicacao);
    this.router.navigate(['/protocolo'], {
        queryParams: {
          cliente: this.idCliente,
          protocolo: this.protocoloId,
        },
      }
    );
  }
}
