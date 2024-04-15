import { Component } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: Usuario = new Usuario('', '');
  nombreActual: string = '';
  claveActual: string = '';

  ingresar(nombreActual: string, claveActual: string) {
    console.log('Se recibió este nombre: ' + nombreActual);
    console.log('Se recibió esta clave: ' + claveActual);

    if (nombreActual !== '' && claveActual !== '') {
        console.log('Usuario Ingresado Correctamente!');
        this.usuario.nombre = nombreActual;
        this.usuario.clave = claveActual;

        console.log('El nombre del usuario ahora es: ' + this.usuario.nombre);
        console.log('La clave del usuario ahora es: ' + this.usuario.clave);
      } else {
        console.log('Falta ingresar alguno de los dos datos Nombre y Clave');
    }
  }
}