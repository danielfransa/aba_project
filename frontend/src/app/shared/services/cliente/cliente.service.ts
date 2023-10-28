import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public localStorage: any;

  constructor() { 
    this.localStorage = window.localStorage;
  }

  getClientes() {
    const cliente = this.localStorage.getItem('cliente');
    return JSON.parse(cliente);
  }

  saveCliente(cliente: any) {
    const clientes = this.getClientes() || [];
    clientes.push(cliente);
    this.localStorage.setItem('cliente', JSON.stringify(clientes));
  }

  getClientePorId(id: string) {
    const clientes = this.getClientes();
    return clientes.find((c: any) => c.id === id)
  }
}
