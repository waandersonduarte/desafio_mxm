import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-listar-paciente',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './listar-paciente.component.html',
  styleUrl: './listar-paciente.component.css'
})
export class ListarPacienteComponent {

}
