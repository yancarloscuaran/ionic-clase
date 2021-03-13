import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage{

  nombres = null;

  usuario = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

 

  async guardarDato(){
    this.usuario.push(
      {
        nombres: this.nombres
      }
    ) 

    console.log(this.usuario)
    this.nombres = "";

    
  }


}


 