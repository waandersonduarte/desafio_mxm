import { Component } from '@angular/core';
import { Paciente } from '../../../modelos/Paciente';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PacienteService } from '../../../servicos/paciente/paciente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-paciente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registrar-paciente.component.html',
  styleUrl: './registrar-paciente.component.css'
})
export class RegistrarPacienteComponent {

  // Vetor de pacientes
  pacientes: Paciente[] = [];

  // Formulário
  formulario = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    sexo: new FormControl(''),
    dataNascimento: new FormControl(''),
    telefone: new FormControl(''),
    endereco: new FormControl('')
  });

  // Construtor
  constructor(private servico:PacienteService){}

  // Após renderizar o componente
  ngOnInit(){
    this.servico.selecionar()
    .subscribe(dados => this.pacientes = dados);
  }

  // Método para cadastrar pacientes
  cadastrar():void{
    this.servico.cadastrar(this.formulario.value as Paciente)
    .subscribe(paciente => {
      // Cadastrar no vetor de pacientes
      this.pacientes.push(paciente);

      // Limpar o formulario
      this.formulario.reset();
    });
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
