import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-listar-agenda',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './listar-agenda.component.html',
  styleUrl: './listar-agenda.component.css'
})
export class ListarAgendaComponent {

}
