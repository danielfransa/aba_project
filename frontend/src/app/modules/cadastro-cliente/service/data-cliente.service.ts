import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICliente } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataClienteService {
  private _cliente = new BehaviorSubject<ICliente | null>(null);
  public cliente = this._cliente.asObservable();

  setClient(cliente: ICliente) {
    this._cliente.next(cliente);
  }

  removeClient() {
    this._cliente.next(null);
  }
}
