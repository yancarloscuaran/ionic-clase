import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  id = null
  nombre = null;
  apellido = null;
  celular = null;
  email = null;

  usuarios = [];

  constructor() { }

  guardarDatos() {
    //agregando datos a la base de datos en memoria
    if(this.id != null)
    {
      this.usuarios[this.id]["nombre"] = this.nombre
      this.usuarios[this.id]["apellido"] = this.apellido
      this.usuarios[this.id]["celular"] = this.celular
      this.usuarios[this.id]["email"] = this.email
    }
    else{
    
      this.usuarios.push(
        {

          nombre: this.nombre,
          apellido: this.apellido,
          celular: this.celular,
          email: this.email,
        }
      ) 
    }
    //limpiando datos
    console.log(this.usuarios)
    this.id = null
    this.nombre = "";
    this.apellido = "";
    this.celular = "";
    this.email = "";
  }

  editarDatos(usuario){
    //editar datos usando usuario y id
    this.nombre = usuario["nombre"]
    this.apellido = usuario["apellido"]
    this.celular = usuario["celular"]
    this.email = usuario["email"]

    //indexOf devuelve el string comensando desde 0
    this.id = this.usuarios.indexOf(usuario)
    this.usuarios[this.id]["nombre"] = this.nombre
    this.usuarios[this.id]["apellido"] = this.apellido
    this.usuarios[this.id]["celular"] = this.celular
    this.usuarios[this.id]["email"] = this.email
    
  }
  
  eliminarDatos(usuario){
    //eliminando datos mediante el usuario y el id
    this.id = this.usuarios.indexOf(usuario)
    this.usuarios.splice(this.id, 1)

    //limpiando campos
    this.id = null
    this.nombre = "";
    this.apellido = "";
    this.celular = "";
    this.email = "";
  }

}
