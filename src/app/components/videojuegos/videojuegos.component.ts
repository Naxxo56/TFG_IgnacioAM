import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PeticionesApiService } from 'src/app/services/peticiones-api.service';
import { ProductosServicesService } from 'src/app/services/productos-services.service';
import { Videojuego } from 'src/assets/utils/Videojuego';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css'],
})
export class VideojuegosComponent implements OnInit {

  videojuego:Observable<any[]> | undefined; //observable donde iran todos los elementos de la base de datos
  //videojuegometidobda:Videojuego; // objeto que se añadira a la base de datos
  listaVideojuegos: Videojuego[]; //array donde se rellena con los objetos que tiene el observable consola
 
  identificador:number;
  
  constructor(
    public servicioProductos: ProductosServicesService,
    private toastSvc: ToastrService,
    private apiService: PeticionesApiService,
    private bda:AngularFireDatabase
  ) {
    //this.identificador = 0
  }
  listaCarritoNombre: any[];
  listaNuevaPrueba: any[] = []; //IGUAL QUE BEBIDAS TS
  listaFiltradaVideojuegos:Videojuego[];

  videojuegoSelected:Videojuego;

  ngOnInit(): void {
    var i = 0;
    this.videojuego = this.bda.list('Productos').valueChanges();  
    this.videojuego.forEach(element => {
      element.forEach(x => { 
        if (x.tipo == "videojuego") {
          i++;
        }          
        if (this.listaVideojuegos.length < i && x.tipo == "videojuego") {
          this.listaVideojuegos.push(x);   
        }    
      });
    });

    this.videojuegoSelected={
      nombre: "",
      descripcion: "",
      imagen:"",
      precio: 0,
      tiempodejuego:0,
      tipo:"videojuego",
      id:0,
    }

    this.identificador = this.servicioProductos.getIdentificador();

    this.listaVideojuegos = this.servicioProductos.getListaVideojuegos();
    this.listaCarritoNombre = this.servicioProductos.getListaCarrito();
    //this.listaCarritoPrecioImagen = this.servicioProductos.getlistaCarritoPrecioImagen();
  }
  agregarCarrito(nombre: string) {
    /*
     this.listaCarrito.push(nombre);
    this.servicioProductos.setListaCarrito = this.listaCarrito;

    this.listaCarritoPrecioImagen.push(precio);
    this.listaCarritoPrecioImagen.push(imagen);
    this.servicioProductos.setlistaCarritoPrecioImagen = this.listaCarritoPrecioImagen;
    */
    this.listaCarritoNombre.push(nombre);
    this.listaVideojuegos.forEach((objetoC) => {
      if (objetoC.nombre == nombre) {
        //this.listaNuevaPrueba.push(objetoC);
        this.videojuegoSelected={
          nombre:objetoC.nombre,
          descripcion:objetoC.descripcion,
          imagen:objetoC.imagen,
          precio: objetoC.precio,
          tiempodejuego:objetoC.tiempodejuego,
          tipo:objetoC.tipo,
          id:this.identificador,
        }
        this.identificador++;
        this.listaNuevaPrueba.push(this.videojuegoSelected);
      }
    });
    this.servicioProductos.setIdentificador = this.identificador
    this.servicioProductos.setListaNuevaPrueba = this.listaNuevaPrueba;
    this.toastSvc.success('Has añadido:' + nombre);
    this.listaNuevaPrueba = [];
  }
  filtrarVideojuego(nombre:string,precio:number){
    this.listaFiltradaVideojuegos=[];
    this.listaVideojuegos.forEach((juego)=>{
      if (juego.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase())&&juego.precio.toString().includes(precio.toString())) {
        this.listaFiltradaVideojuegos.push(juego);
      }
    });

  }
}
