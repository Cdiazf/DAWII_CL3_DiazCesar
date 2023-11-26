import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.css']
})
export class Pregunta2Component {
  cantidad: number = 0;
  precio: number = 0;
  descuento: number = 0;

  calcularDescuento() {
    const valorAPagar = this.cantidad * this.precio;
    if (valorAPagar > 200) {
      this.descuento = valorAPagar * 0.2;
    } else {
      this.descuento = 0;
    }
  }
}
