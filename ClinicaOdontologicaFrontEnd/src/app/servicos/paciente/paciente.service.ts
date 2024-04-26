import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../../modelos/Paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  //URL
  private url:string = 'http://localhost:5222/pacientes';

  constructor(private http:HttpClient) { }

  // Método para selecionar pacientes
  selecionar():Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url);
  }

  // Método para cadastrar pacientes
  cadastrar(obj:Paciente):Observable<Paciente>{
    return this.http.post<Paciente>(this.url, obj);
  }

  // Método para remover pacientes
  remover(id: number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
