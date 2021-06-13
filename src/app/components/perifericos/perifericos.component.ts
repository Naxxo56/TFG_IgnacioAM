import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PeticionesApiService } from 'src/app/services/peticiones-api.service';
import { ProductosServicesService } from 'src/app/services/productos-services.service';
import { Periferico } from 'src/assets/utils/Periferico';

@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.component.html',
  styleUrls: ['./perifericos.component.css'],
})
export class PerifericosComponent implements OnInit {

  periferico:Observable<any[]> | undefined; //observable donde iran todos los elementos de la base de datos
  listaPerifericos: Periferico[];

  identificador:number;
  constructor(
    public servicioProductos: ProductosServicesService,
    private toastSvc: ToastrService,
    private apiService: PeticionesApiService,
    private bda:AngularFireDatabase
  ) {this.identificador = 0} //en el constructor se mete la variable servicio porque sino no tenemos acceso a todos los datos porque los objetos creados estan en los servicios


  listaCarritoNombre: any[]; //creamos 3 variables,, la primera se rellenara con la lista de VIDEOJUEGOS de los servicios, la segunda sera la lista del carrito que SOLO tendra NOMBRE y tambien la tenemos que crear en los servicios para que desde ahi poder comunicarla con todas las demás
  listaNuevaPrueba: any[] = []; //y la usaremos para poner el numerito de datos que tenemos en el carrito y luego la tercera se rellenara con IMAGEN Y PRECIO que luego juntaremos en un futuro en una unica lista para el pago final
  perifericoSelected:Periferico;
  listaFiltradaPeriferico:Periferico[];

  ngOnInit(): void {

    var i = 0; // variable usada para hacer un ++ tantas veces como elementos en la base de datos haya y se inicializa a 0 cada vez quye salimos porque sino se repite y se añadirian otrea vez los mismos elementos x2 y con esto lo controlamos 
    this.periferico = this.bda.list('Productos').valueChanges();  
    this.periferico.forEach(element => {
      element.forEach(x => { 
        if (x.tipo == "periferico") {
          i++;
        }          
        if (this.listaPerifericos.length < i && x.tipo == "periferico") {
          this.listaPerifericos.push(x);   
        }    
      });
    });
    this.perifericoSelected={
      nombre: "",
      imagen:"",
      descripcion: "",
      precio: 0,
      id:0,
      tipo:"periferico"
    }

    this.identificador = this.servicioProductos.getIdentificador();
    this.listaPerifericos = this.servicioProductos.getListaPerifericos(); //lo dicho, llenamos el array que hemos creado aqui con los datos del service
    this.listaCarritoNombre = this.servicioProductos.getListaCarrito(); //igualamos lista carritos al del servicio porque sino no va xD
    //this.listaCarritoPrecioImagen = this.servicioProductos.getlistaCarritoPrecioImagen(); //lo mismo que lo anterior
  }
  agregarCarrito(nombre: string) {
    /*
    //pide por parametros 3 atributos uno para listaCarrito y dos para listaCarritoPrecioImagen
    this.listaCarrito.push(nombre); //aqui pusheamos el nombre que le pasamos por el html (explicado ahi que dato pasa) para llenar el array en 1 y asi con cada dato que meta
    this.servicioProductos.setListaCarrito = this.listaCarrito; //aqui lo que hacemos es pasar la listaCarrito desde el TS al Service de manera que sera comun con todas las clases

    this.listaCarritoPrecioImagen.push(precio); //lo mismo que lo anterior
    this.listaCarritoPrecioImagen.push(imagen); //lo mismo que lo anterior
    this.servicioProductos.setlistaCarritoPrecioImagen = this.listaCarritoPrecioImagen; //lo mismo que lo anterior
    */
    this.listaCarritoNombre.push(nombre);
    this.listaPerifericos.forEach((objetoC) => {
      if (objetoC.nombre == nombre) {
        this.perifericoSelected={
          nombre: objetoC.nombre,
          imagen: objetoC.imagen,
          descripcion: objetoC.descripcion,
          precio: objetoC.precio,
          id:this.identificador,
          tipo:objetoC.tipo
        }
        this.identificador++;
        this.listaNuevaPrueba.push(this.perifericoSelected);
      }
    });
    this.servicioProductos.setIdentificador = this.identificador;
    this.servicioProductos.setListaNuevaPrueba = this.listaNuevaPrueba;
    this.toastSvc.success('Has añadido:' + nombre);
    this.listaNuevaPrueba = [];
  }
  filtrarPeriferico(nombre:string,precio:number){
    this.listaFiltradaPeriferico=[];
    this.listaPerifericos.forEach((periferico)=>{
      if (periferico.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase())&&periferico.precio.toString().includes(precio.toString())) {
        this.listaFiltradaPeriferico.push(periferico);
      }
    });

  }
}
