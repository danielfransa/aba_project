import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AplicacaoService {

  public localStorage: any;

  constructor() { 
    this.localStorage = window.localStorage;
  }

  getAplicacoes(idProtocolo: string) {
    const aplicacoes: any = [];
    const resultado = this.localStorage.getItem('aplicacoes');
    if(resultado) {
      JSON.parse(resultado)?.forEach((element: any) => {
        if(element.idProtocolo === idProtocolo) aplicacoes.push(element);
      });
    }
    return aplicacoes;
  }

  saveAplicacao(aplicacao: any) {
    const aplicacoes = JSON.parse(this.localStorage.getItem('aplicacoes')) || [];
    aplicacoes.push(aplicacao);
    this.localStorage.setItem('aplicacoes', JSON.stringify(aplicacoes));
  }
}
