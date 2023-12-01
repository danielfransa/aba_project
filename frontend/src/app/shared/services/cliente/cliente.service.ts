import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICliente, IResponsavel } from '../../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly urlApi = environment.url;

  constructor(private http: HttpClient) { }

  saveClient(client: ICliente): Observable<ICliente> {
    return this.http.post<ICliente>(`${this.urlApi}clients`, client);
  }

  getAllClients(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>(`${this.urlApi}clients`);
  }

  getClientById(id: number): Observable<ICliente> {
    return this.http.get<ICliente>(`${this.urlApi}clients/${id}`);
  }

  updateClient(client: ICliente, id: number): Observable<any> {
    return this.http.put<any>(`${this.urlApi}clients/${id}`, client);
  }
}
