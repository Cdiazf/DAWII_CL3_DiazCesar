import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.component.html',
  styleUrls: ['./pregunta3.component.css']
})
export class Pregunta3Component {
  montoPrestamo: number = 0;
  cuotas: number = 0;
  montoCuota: number = 0;

  calcularCobro() {
    if (this.montoPrestamo > 5000) {
      this.cuotas = 3;
    } else if (this.montoPrestamo < 1000) {
      this.cuotas = 1;
    } else if (this.montoPrestamo >= 2000 && this.montoPrestamo <= 3000) {
      this.cuotas = 2;
    } else {
      this.cuotas = 5;
    }

    // Calculate interest based on the given conditions
    const interes = this.montoPrestamo < 4000 ? 0.12 : 0.1;

    // Calculate total amount with interest
    const totalDeuda = this.montoPrestamo * (1 + interes);

    // Calculate the amount of each installment
    this.montoCuota = totalDeuda / this.cuotas;
  }
}
