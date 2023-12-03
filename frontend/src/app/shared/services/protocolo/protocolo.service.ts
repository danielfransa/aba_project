import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProtocoloService {
  public localStorage: any;

  constructor() { 
    this.localStorage = window.localStorage;
  }

  getProtocolos() {
    const protocols = this.localStorage.getItem('protocolos');
    return JSON.parse(protocols);
  }

  saveProtocolo(protocol: any) {
    const protocols = this.getProtocolos() || [];
    protocols.push(protocol);
    this.localStorage.setItem('protocolos', JSON.stringify(protocols));
  }

  getProcoloPorId(id: string) {
    const protocols = this.getProtocolos();
    return protocols.find((c: any) => c.id === id)
  }
}
