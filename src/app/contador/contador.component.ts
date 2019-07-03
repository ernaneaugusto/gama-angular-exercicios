import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

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

  ngOnInit() {
  }

}
