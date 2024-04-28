import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Consulta } from '../../../modelos/Consulta';
import { ConsultaService } from '../../../servicos/consulta/consulta.service';

@Component({
  selector: 'app-registrar-consulta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './registrar-consulta.component.html',
  styleUrl: './registrar-consulta.component.css'
})
export class RegistrarConsultaComponent {
  // Vetor de pacientes
  consultas: Consulta[] = []

  // Formulário
  formulario = new FormGroup({
    pacienteId: new FormControl(),
    agendaId: new FormControl(),
    procedimento: new FormControl('')
  });

  // Construtor
  constructor(private servico:ConsultaService){}

  // Após renderizar o componente
  ngOnInit(){
    this.servico.selecionar()
    .subscribe(dados => this.consultas = dados);
  }

  // Método para cadastrar pacientes
  cadastrar():void{
    this.servico.cadastrar(this.formulario.value as Consulta)
    .subscribe(consulta => {
      // Cadastrar no vetor de pacientes
      this.consultas.push(consulta);

      // Limpar o formulario
      this.formulario.reset();
    });
  }

  // Método para remover pacientes
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
