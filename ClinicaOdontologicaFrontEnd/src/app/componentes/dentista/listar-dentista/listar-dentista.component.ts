import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Dentista } from '../../../modelos/Dentista';
import { DentistaService } from '../../../servicos/dentista/dentista.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-dentista',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './listar-dentista.component.html',
  styleUrl: './listar-dentista.component.css'
})
export class ListarDentistaComponent {
  dentistas: Dentista[] = [];

  constructor(private servico:DentistaService){}

  ngOnInit(){
    this.servico.selecionar()
    .subscribe(dados => this.dentistas = dados);
  }

  // Método para remover dentistas
  remover(id:number):void{
    this.servico.remover(id)
    .subscribe(r => {
      // Encontrar a posição do dentista no vetor
      let posicaoDentista = this.dentistas.findIndex(obj => {return obj.id === id});

      // Remover do vetor
      this.dentistas.splice(posicaoDentista, 1);
    });
  }
}
