import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Paciente } from '../../../modelos/Paciente';
import { PacienteService } from '../../../servicos/paciente/paciente.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-paciente',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './listar-paciente.component.html',
  styleUrl: './listar-paciente.component.css'
})
export class ListarPacienteComponent {
  pacientes: Paciente[] = [];

  constructor(private servico:PacienteService){}

  ngOnInit(){
    this.servico.selecionar()
    .subscribe(dados => this.pacientes = dados);
  }

  // Método para remover pacientes
  remover(id:number):void{
    this.servico.remover(id)
    .subscribe(r => {
      // Encontrar a posição do paciente no vetor
      let posicaoPaciente = this.pacientes.findIndex(obj => {return obj.id === id});

      // Remover do vetor
      this.pacientes.splice(posicaoPaciente, 1);
    });
  }


}
