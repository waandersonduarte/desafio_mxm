import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from '../../modelos/Consulta';
import { Paciente } from '../../modelos/Paciente';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  //URL
  private url:string = 'http://localhost:5222/consultas';
  private urlPaciente:string = 'http://localhost:5222/pacientes';

  constructor(private http:HttpClient) { }

  // Método para selecionar consultas
  selecionar():Observable<Consulta[]>{
    return this.http.get<Consulta[]>(this.url);
  }

  // Método para cadastrar consultas
  cadastrar(obj:Consulta):Observable<Consulta>{
    return this.http.post<Consulta>(this.url, obj);
  }

  // Método para remover consultas
  remover(id: number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
