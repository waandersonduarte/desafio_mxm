import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Consulta } from '../../../modelos/Consulta';
import { ConsultaService } from '../../../servicos/consulta/consulta.service';
import { CommonModule } from '@angular/common';
import { Paciente } from '../../../modelos/Paciente';
import { PacienteService } from '../../../servicos/paciente/paciente.service';

@Component({
  selector: 'app-listar-consulta',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './listar-consulta.component.html',
  styleUrl: './listar-consulta.component.css'
})
export class ListarConsultaComponent {

  consultas: Consulta[] = []
  
  constructor(private servico:ConsultaService){}

  ngOnInit(){
    this.servico.selecionar()
    .subscribe(dados => this.consultas = dados);
  }

  // Método para remover consultas
  remover(id:number):void{
    this.servico.remover(id)
    .subscribe(r => {
      // Encontrar a posição do paciente no vetor
      let posicaoConsulta = this.consultas.findIndex(obj => {return obj.id === id});

      // Remover do vetor
      this.consultas.splice(posicaoConsulta, 1);
    });
  }
}
