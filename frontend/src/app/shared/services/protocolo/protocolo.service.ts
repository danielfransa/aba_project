import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProtocoloService {
  public localStorage: any;

  constructor() { 
    this.localStorage = window.localStorage;
  }

  getProtocolos(idCliente: number) {
    const protocols: any = []
    JSON.parse(this.localStorage.getItem('protocolos'))?.forEach((element: any) => {
      if(element.idCliente === idCliente) protocols.push(element);
    });
    return protocols
  }

  saveProtocolo(protocol: any) {
    const protocols = JSON.parse(this.localStorage.getItem('protocolos')) || [];
    protocols.push(protocol);
    this.localStorage.setItem('protocolos', JSON.stringify(protocols));
  }

  getProtocoloPorId(id: string, idCliente: number) {
    const protocols = JSON.parse(this.localStorage.getItem('protocolos'));
    return protocols.find((c: any) => c.id === id)
  }
}
