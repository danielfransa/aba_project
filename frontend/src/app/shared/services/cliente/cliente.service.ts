import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICliente, IResponsavel } from '../../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public localStorage: any;
  private readonly urlApi = environment.url;

  constructor(private http: HttpClient) { 
    this.localStorage = window.localStorage;
  }

  saveClient(client: ICliente): Observable<ICliente> {
    return this.http.post<ICliente>(`${this.urlApi}clients`, client);
  }

  saveResponsible(responsible: IResponsavel, idClient: number): Observable<IResponsavel> {
    return this.http.post<IResponsavel>(`${this.urlApi}clients/${idClient}/parents`, responsible);
  }

  getAllClients(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>(`${this.urlApi}clients`);
  }

  getClientById(id: number): Observable<ICliente> {
    return this.http.get<ICliente>(`${this.urlApi}clients/${id}`);
  }

  getResponsibleByClient(id: number): Observable<IResponsavel[]> {
    return this.http.get<IResponsavel[]>(`${this.urlApi}clients/${id}/parents`);
  }  
}
