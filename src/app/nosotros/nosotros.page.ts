import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage {
  num1 = null;
  num2 = null;
  operador = null;
  respuesta = null;
  operar = null;
  
  calcularDato(){
    let number1 = parseInt(this.num1)
    let number2 = parseInt(this.num2)
    
    switch(this.operador)
    {
      case '+':
        this.operar = 'suma'
        this.respuesta = number1 + number2
      break;

      case '-':
        this.operar = 'resta'
        this.respuesta = number1 - number2
      break;

      case '*':
        this.operar = 'multiplicación'
        this.respuesta = number1 * number2
      break;

      case '/':
        this.operar = 'división'
        this.respuesta = number1 / number2
      break;
    }
  } 
}
