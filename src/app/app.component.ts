import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador = 0;
  menorQueZero = false;
  numClicks = 0

  verificaMenorQueZero(){
    if(this.contador < 0){
      this.menorQueZero = true
      this.contador = 0
      return;
    }
  }

  addContador(){
    this.contador++;
    this.numClicks++;
    this.menorQueZero = false;
  }
  subContador(){
    this.contador--;
    this.verificaMenorQueZero();
  }
  zerarContador(){
    this.contador = 0;
    this.menorQueZero = false;
  }
}
