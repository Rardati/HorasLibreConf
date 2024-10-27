import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  num: number;
  numSecret: number = this.numAleatorio(1, 100);

  mayorMenor: string = '...';

  constructor() {
    console.log("El numero secreto es: " + this.numSecret);
  }

  numAleatorio(a, b) {
    return Math.round(Math.random() * (a - b) + parseInt(a));
  }

  compruebaNumero() {
    if (this.num) {
      if (this.numSecret < this.num) {
        this.mayorMenor = 'menor';
      } else if (this.numSecret > this.num) {
        this.mayorMenor = 'mayor';
      } else {
        this.mayorMenor = 'igual';
      }
    }
  }

}
