import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda } from '../../modelos/Agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  //URL
  private url:string = 'http://localhost:5222/agendas';

  constructor(private http:HttpClient) { }

  // Método para selecionar agendas
  selecionar():Observable<Agenda[]>{
    return this.http.get<Agenda[]>(this.url);
  }

  // Método para cadastrar agendas
  cadastrar(obj:Agenda):Observable<Agenda>{
    return this.http.post<Agenda>(this.url, obj);
  }

  // Método para remover agendas
  remover(id: number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
