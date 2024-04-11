import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
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
    this.promedio = (a+ b) / 2;
    this.suma = a + b;
}

  limpiar() {
    this.edadUno = '';
    this.edadDos = '';
    this.promedio = 0;
    this.suma = 0;
  }


  // Ejemplos de funciones de ciclo de vida del componente
  ngOnInit(): void {
    console.log('Arrancó el componente "app"');
  }

  ngAfterViewChecked(): void {
    console.log('checked');
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
}
