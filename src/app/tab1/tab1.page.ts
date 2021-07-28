import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  mensajes: string;
  numeroConcatenar: string;

  numero1: number;
  numero2: number;
  operadorMatematico: string;

  constructor(public toastController: ToastController) {
    this.numeroConcatenar = '0.0';
  }

  generarOperaciones(simbolo: string) {
    let resultado: number;

    if (simbolo === '=') {
      this.numero2 = Number(this.numeroConcatenar);
      if (this.operadorMatematico === '+') {
        resultado = this.numero1 + this.numero2;
      }
      if (this.operadorMatematico === '-') {
        resultado = this.numero1 - this.numero2;
      }
      if (this.operadorMatematico === '*') {
        resultado = this.numero1 * this.numero2;
      }
      if (this.operadorMatematico === '/') {
        resultado = this.numero1 / this.numero2;
      }
      if(this.operadorMatematico === 'x2'){
        resultado = Math.pow(this.numero1,2);
      }
      if(this.operadorMatematico === '%'){
        resultado = this.numero1 % this.numero2;
      }
      this.numeroConcatenar = resultado + '';
    } else {
      this.numero1 = Number(this.numeroConcatenar);
      this.operadorMatematico = simbolo;
      this.numeroConcatenar = '0.0';
    }
  }

  operacionInv(simbolo: string){
    let resultado: number;
    if(simbolo === '+/-'){
      this.numero1 = Number(this.numeroConcatenar);
      resultado = this.numero1 * (-1);
      this.numeroConcatenar = resultado + '';
    }else{
      this.numero1 = Number(this.numeroConcatenar);
      this.operadorMatematico = simbolo;
      this.numeroConcatenar = resultado + '';
    }
  }

  operacionSqrt(simbolo: string){
    let resultado: number;
    if(simbolo === 'sqrt'){
      this.numero1 = Number(this.numeroConcatenar);
      resultado = Math.sqrt(this.numero1);
      this.numeroConcatenar = resultado + '';
    }else{
      this.numero1 = Number(this.numeroConcatenar);
      this.operadorMatematico = simbolo;
      this.numeroConcatenar = resultado + '';
    }
  }

  operacionExpo(simbolo: string){
    let resultado: number;
    if(simbolo === 'x2'){
      this.numero1 = Number(this.numeroConcatenar);
      resultado = Math.pow(this.numero1,2);
      this.numeroConcatenar = resultado + '';
    }else{
      this.numero1 = Number(this.numeroConcatenar);
      this.operadorMatematico = simbolo;
      this.numeroConcatenar = resultado + '';
    }
  }

  metodoInvertirOp(simbolo: string){
    let resultado: number;
    if(simbolo === '1/x'){
      this.numero1 = Number(this.numeroConcatenar);
      resultado= 1/ this.numero1;
      this.numeroConcatenar = resultado + '';
    }else{
      this.numero1 = Number(this.numeroConcatenar);
      this.operadorMatematico = simbolo;
      this.numeroConcatenar = resultado + '';
    }
  }

  concatenarNumero(numero: string) {
    if (this.numeroConcatenar === '0.0') {
      this.numeroConcatenar = numero;
    } else {
      this.numeroConcatenar = this.numeroConcatenar + numero;
    }
  }

  metodoC() {
    this.numeroConcatenar = '0.0';
  }

  metodoEliminar(){
    this.numeroConcatenar = '0.0';
  }

  metodoCE(){
    this.numeroConcatenar = '0.0';
  }
}
