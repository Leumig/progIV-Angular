import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, BienvenidoComponent, LoginComponent, ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  //El implements OnInit no es necesario, pero es una buena práctica
  //Es una interfaz que nos pide agregar la función OnInit

  title: string = 'Hola Mundo';
  edadUno: any;
  edadDos: any;
  promedio: number = 0;
  suma: number = 0;

  onBtn() {
    this.title = "AAAAAAAAAA";
  }

  calcular(a: number, b: number) {
    if (!isNaN(a) && !isNaN(b)) {
        this.promedio = (a + b) / 2;
        this.suma = a + b;
      }
}

  limpiar() {
    this.edadUno = NaN;
    this.edadDos = NaN;
    this.promedio = 0;
    this.suma = 0;
  }


  // Ejemplos de funciones de ciclo de vida del componente
  ngOnInit(): void {
    console.log('Arrancó el componente "app"');
  }
  
  /*
  ngAfterViewChecked(): void {
    console.log('checked');
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }*/
}
