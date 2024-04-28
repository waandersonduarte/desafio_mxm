import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Agenda } from '../../../modelos/Agenda';
import { AgendaService } from '../../../servicos/agenda/agenda.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-agenda',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './listar-agenda.component.html',
  styleUrl: './listar-agenda.component.css'
})
export class ListarAgendaComponent {
  agendas: Agenda[] = [];

  constructor(private servico:AgendaService){}

  ngOnInit(){
    this.servico.selecionar()
    .subscribe(dados => this.agendas = dados);
  }

  // Método para remover agendas
  remover(id:number):void{
    this.servico.remover(id)
    .subscribe(r => {
      // Encontrar a posição do dentista no vetor
      let posicaoAgenda = this.agendas.findIndex(obj => {return obj.id === id});

      // Remover do vetor
      this.agendas.splice(posicaoAgenda, 1);
    });
  }
}
