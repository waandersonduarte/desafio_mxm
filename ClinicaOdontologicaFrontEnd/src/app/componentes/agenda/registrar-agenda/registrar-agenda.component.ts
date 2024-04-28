import { Component } from '@angular/core';
import { Agenda } from '../../../modelos/Agenda';
import { AgendaService } from '../../../servicos/agenda/agenda.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registrar-agenda',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registrar-agenda.component.html',
  styleUrl: './registrar-agenda.component.css'
})
export class RegistrarAgendaComponent {
  // Vetor de agendas
  agendas: Agenda[] = []

  // Formulário
  formulario = new FormGroup({
    data: new FormControl(''),
    hora: new FormControl(''),
    dentistaId: new FormControl()
  });

  // Construtor
  constructor(private servico:AgendaService){}

  // Após renderizar o componente
  ngOnInit(){
    this.servico.selecionar()
    .subscribe(dados => this.agendas = dados);
  }

  // Método para cadastrar agendas
  cadastrar():void{
    this.servico.cadastrar(this.formulario.value as Agenda)
    .subscribe(consulta => {
      // Cadastrar no vetor de agendas
      this.agendas.push(consulta);

      // Limpar o formulario
      this.formulario.reset();
    });
  }

  // Método para remover agendas
  remover(id:number):void{
    this.servico.remover(id)
    .subscribe(r => {
      // Encontrar a posição do paciente no vetor
      let posicaoAgenda = this.agendas.findIndex(obj => {return obj.id === id});

      // Remover do vetor
      this.agendas.splice(posicaoAgenda, 1);
    });
  }
}
