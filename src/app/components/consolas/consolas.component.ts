import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseService } from 'src/app/services/firebase.service';
import { PeticionesApiService } from 'src/app/services/peticiones-api.service';
import { ProductosServicesService } from 'src/app/services/productos-services.service';
import { Consola } from 'src/assets/utils/Consola';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.css'],
})
export class ConsolasComponent implements OnInit {
  
  consola:Observable<any[]> | undefined; //observable donde iran todos los elementos de la base de datos
  listaConsolas: Consola[]; //array donde se rellena con los objetos que tiene el observable consola

  identificador:number;
  constructor(
    public serviciosProductos: ProductosServicesService,
    private toastSvc: ToastrService,
    private bda:AngularFireDatabase
  ) {
    this.identificador = 0
  }

  listaNuevaPrueba: any[] = [];
  listaCarritoNombre: any[] = [];
  consolaSelected:Consola;
  listaFiltradaConsola:Consola[];

  ngOnInit(): void {
    var i = 0; // variable usada para hacer un ++ tantas veces como elementos en la base de datos haya y se inicializa a 0 cada vez quye salimos porque sino se repite y se añadirian otrea vez los mismos elementos x2 y con esto lo controlamos 
    this.consola = this.bda.list('Productos').valueChanges();  
    this.consola.forEach(element => {
      element.forEach(x => { 
        if (x.tipo == "consola") {
          i++;
        }          
        if (this.listaConsolas.length < i && x.tipo == "consola") {
          this.listaConsolas.push(x);   
        }    
      });
    });
    this.consolaSelected={
      nombre: "",
      imagen:"",
      descripcion: "",
      precio: 0,
      capacidad:0,
      id:0,
      tipo:"consola"
    }
    this.identificador = this.serviciosProductos.getIdentificador();
    this.listaConsolas = this.serviciosProductos.getListaConsola();
    this.listaCarritoNombre = this.serviciosProductos.getListaCarrito();
  }
  agregarCarrito(nombre: string) {
    this.listaCarritoNombre.push(nombre);
    this.listaConsolas.forEach((objetoC) => {
      if (objetoC.nombre == nombre) {
        this.consolaSelected={
          nombre: objetoC.nombre,
          imagen: objetoC.imagen,
          descripcion: objetoC.descripcion,
          precio: objetoC.precio,
          capacidad:objetoC.capacidad,
          id:this.identificador,
          tipo:objetoC.tipo
        }
        this.identificador++;
        this.listaNuevaPrueba.push(this.consolaSelected);
      }
    });
    this.serviciosProductos.setIdentificador = this.identificador;
    this.serviciosProductos.setListaNuevaPrueba = this.listaNuevaPrueba;
    this.toastSvc.success('Has añadido:' + nombre);
    this.listaNuevaPrueba = [];
  }

  filtrarConsola(nombre:string,precio:number){
    this.listaFiltradaConsola=[];
    this.listaConsolas.forEach((consola)=>{
      if (consola.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase())&&consola.precio.toString().includes(precio.toString())) {
        this.listaFiltradaConsola.push(consola);
      }
    });

  }
}
