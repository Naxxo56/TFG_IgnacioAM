import { Component, OnInit } from '@angular/core';
import { ProductosServicesService } from 'src/app/services/productos-services.service';
import { Periferico } from 'src/assets/utils/Periferico';
import { Consola } from 'src/assets/utils/Consola';
import { Videojuego } from 'src/assets/utils/Videojuego';
import { Movil } from 'src/assets/utils/Movil';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-anadir-productos-components',
  templateUrl: './anadir-productos-components.component.html',
  styleUrls: ['./anadir-productos-components.component.css'],
})
export class AnadirProductosComponentsComponent implements OnInit {

// objeto que se añadira a la base de datos //

  consolametidabda:Consola; 
  videojuegometidabda:Videojuego;   
  perifericometidabda:Periferico;
  movilemetidabda:Movil; 

   //INICIO VARIABLES COMUNES//
   nombre: string = '';
   imagen: string = ''; 
   descripcion: string = '';
   precio: number = 0;
   capacidad: number = 0;
   //FIN VARIABLES COMUNES//

   //INICIO VARIABLES ESPECIFICAS VIDEOJUEGOS//
   tiempoJuego: number = 0;
   //FIN VARIABLES ESPECIFICAS VIDEOJUEGOS//

   //INICIO VARIABLES ESPECIFICAS MOVILES//
   pixeles:number;
   //FIN VARIABLES ESPECIFICAS MOVILES//

  listaConsolasTotal: Consola[] = [];
  listaMovilesTotal: Movil[] = [];
  listaPerifericosTotal: Periferico[] = [];
  listaVideojuegosTotal: Videojuego[] = [];

  datos; //contendrá todos los distintos productos
  seleccion: string = '0'; //variable que se encarga de saber que <select> hemos escogido

  constructor(public servicioProductos: ProductosServicesService,private bda:AngularFireDatabase) {
    this.datos = ['Consolas', 'Videojuegos', 'Perifericos', 'Moviles']; //inicializacion de variable datos con los respectivos datos que en el HTML se recorrera para hacer tantos <select><option> sean necesarios
  }

  ngOnInit(): void {}   

  anadirConsola() {  
     /*
    Aqui lo que hacemos es:
    1ºcogemos la lista consola creada al principio de la clase
    2ºla lista creada la igualamos al servicio es decir al total(por ahora igual que con los cards)
    3ºcoges la lista total ya implementada y le metes el producto qe se crea justo arriba de este
     comentario recogiendo el valor de todos los inputs y colocandolos en sus respectivos huecos
    4ºUna vez la lista con todo MAS el producto que se PUSHEA cuando has pulsado el boton coges el SETTER
      creado en el SERVICIO y lo seteas a la lista de ahora mismo que se ha actualizado con el nuevo elemento
    */
    if (
      this.nombre.length == 0 ||
      this.descripcion.length == 0 ||
      this.precio == 0 ||
      this.capacidad == 0
    ) {
     alert("Faltan campos obligatorios por rellenar")
    } else {
      this.consolametidabda = {
        nombre: this.nombre,
        imagen: this.imagen,
        descripcion: this.descripcion, //creacion del objeto con las variables que tendran el valor de los inputs
        precio: this.precio,
        capacidad: this.capacidad,
        id:0,
        tipo:"consola"
      }; 

    const tablaConsola = this.bda.list('Productos');
    tablaConsola.push(this.consolametidabda)

    this.listaConsolasTotal = this.servicioProductos.getListaConsola();
    this.listaConsolasTotal.push(this.consolametidabda);
    this.servicioProductos.setlistaConsolas = this.listaConsolasTotal;   
  }     
    }
  agregarVideojuego() {
    if (
      this.nombre.length == 0 ||
      this.descripcion.length == 0 ||
      this.precio == 0 ||
      this.tiempoJuego == 0
    ) {
      alert("Faltan campos obligatorios por rellenar")
    } else {
      this.videojuegometidabda = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        imagen: this.imagen,
        precio: this.precio,
        tiempodejuego: this.tiempoJuego,
        tipo:'videojuego',
        id:0
      };
      const tablaConsola = this.bda.list('Productos');
      tablaConsola.push(this.videojuegometidabda)

      this.listaVideojuegosTotal = this.servicioProductos.getListaVideojuegos();
      this.listaVideojuegosTotal.push(this.videojuegometidabda);
      this.servicioProductos.setListaVideojuegos = this.listaVideojuegosTotal;
    }
  }
  agregarMovil() {
    if (
      this.nombre.length == 0 ||
      this.descripcion.length == 0 ||
      this.precio == 0 ||
      this.capacidad == 0 ||
      this.pixeles == 0
    ) {
      alert("Faltan campos obligatorios por rellenar")
    } else {
      this.movilemetidabda = {
        nombre: this.nombre,
        imagen: this.imagen,
        precio: this.precio,
        descripcion: this.descripcion,
        capacidad: this.capacidad,
        id:0,
        tipo:"movil",
        pixeles:1
      };

      const tablaConsola = this.bda.list('Productos');
      tablaConsola.push(this.movilemetidabda)

      this.listaMovilesTotal = this.servicioProductos.getListaMoviles();
      this.listaMovilesTotal.push(this.movilemetidabda);
      this.servicioProductos.setListaMoviles = this.listaMovilesTotal;
    }
  }
  agregarPeriferico() {
    if (
      this.nombre.length == 0 ||
      this.descripcion.length == 0 ||
      this.precio == 0 
      //this.cantidad == 0 ||
    ) {
      alert("Faltan campos obligatorios por rellenar")
    } else {
      this.perifericometidabda = {
        nombre: this.nombre,
        imagen: this.imagen,
        descripcion: this.descripcion,
        precio: this.precio,
        id:0,
        tipo:'periferico'
      };     
      const tablaConsola = this.bda.list('Productos');
      tablaConsola.push(this.perifericometidabda)

      this.listaPerifericosTotal = this.servicioProductos.getListaPerifericos();
      this.listaPerifericosTotal.push(this.perifericometidabda);
      this.servicioProductos.setListaPerifericos = this.listaPerifericosTotal;
    }
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      return false;
    }
    return true;
  }
}
