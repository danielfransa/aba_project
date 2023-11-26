import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IResponsavel } from '../../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {
  private readonly urlApi = environment.url;

  constructor(private http: HttpClient) { }

  saveResponsible(responsible: IResponsavel, idClient: number): Observable<IResponsavel> {
    return this.http.post<IResponsavel>(`${this.urlApi}clients/${idClient}/parents`, responsible);
  }

  getResponsibleByClient(id: number): Observable<IResponsavel[]> {
    return this.http.get<IResponsavel[]>(`${this.urlApi}clients/${id}/parents`);
  }  

  getResponsibleByid(clientId: number, id:number): Observable<IResponsavel> {
    return this.http.get<IResponsavel>(`${this.urlApi}clients/${clientId}/parents/${id}`);
  }

  updateResponsavel(responsible: IResponsavel, idClient: number, id: number) {
    return this.http.put<IResponsavel>(`${this.urlApi}clients/${idClient}/parents/${id}`, responsible);
  }

  deleteResponsavel(clientId: number, id:number): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}clients/${clientId}/parents/${id}`);
  }
}
