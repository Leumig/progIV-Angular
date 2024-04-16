import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [RouterModule],
  // Era necesario agregar el ruteo aca, porque los botones del menú los tengo en este componente
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})
export class BienvenidoComponent {

}
