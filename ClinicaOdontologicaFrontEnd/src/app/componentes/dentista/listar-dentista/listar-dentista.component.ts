import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-listar-dentista',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './listar-dentista.component.html',
  styleUrl: './listar-dentista.component.css'
})
export class ListarDentistaComponent {

}
