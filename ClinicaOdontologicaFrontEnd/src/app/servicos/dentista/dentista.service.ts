import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dentista } from '../../modelos/Dentista';

@Injectable({
  providedIn: 'root'
})
export class DentistaService {

  //URL
  private url:string = 'http://localhost:5222/dentistas';

  constructor(private http:HttpClient) { }

  // Método para selecionar pacientes
  selecionar():Observable<Dentista[]>{
    return this.http.get<Dentista[]>(this.url);
  }

  // Método para cadastrar pacientes
  cadastrar(obj:Dentista):Observable<Dentista>{
    return this.http.post<Dentista>(this.url, obj);
  }

  // Método para remover pacientes
  remover(id: number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
