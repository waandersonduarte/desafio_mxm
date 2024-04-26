import { Component, NgModule, OnInit } from '@angular/core';
import { Dentista } from '../../../modelos/Dentista';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DentistaService } from '../../../servicos/dentista/dentista.service';

@Component({
  selector: 'app-registrar-dentista',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './registrar-dentista.component.html',
  styleUrl: './registrar-dentista.component.css'
})
export class RegistrarDentistaComponent implements OnInit{

  // Vetor de pacientes
  dentistas: Dentista[] = []

  // Formulário
  formulario = new FormGroup({
    nome: new FormControl(''),
    crm: new FormControl(''),
    telefone: new FormControl('')
  });

  // Construtor
  constructor(private servico:DentistaService){}

  // Após renderizar o componente
  ngOnInit(){
    this.servico.selecionar()
    .subscribe(dados => this.dentistas = dados);
  }

  // Método para cadastrar pacientes
  cadastrar():void{
    this.servico.cadastrar(this.formulario.value as Dentista)
    .subscribe(dentista => {
      // Cadastrar no vetor de pacientes
      this.dentistas.push(dentista);

      // Limpar o formulario
      this.formulario.reset();
    });
  }

  // Método para remover pacientes
  remover(id:number):void{
    this.servico.remover(id)
    .subscribe(r => {
      // Encontrar a posição do paciente no vetor
      let posicaoDentista = this.dentistas.findIndex(obj => {return obj.id === id});

      // Remover do vetor
      this.dentistas.splice(posicaoDentista, 1);
    });
  }
}
