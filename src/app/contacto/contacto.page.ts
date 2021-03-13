import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage{

  constructor(public alertController: AlertController) { }

  nombres = null;

  async saludar(){
    if (this.nombres == null) {
      const alerta = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: "Ingresar Nombre ",
        buttons: [
          {
            text: '',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('OK');
            }
          }        
        ]
      });
      this.nombres="",
  
      await alerta.present();
    } else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Saludos',
        message: "Hola " + this.nombres,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }        
        ]
      });
      this.nombres="",
  
      await alert.present();
    }
    
  }
}