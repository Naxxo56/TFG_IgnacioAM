import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PeticionesApiService } from 'src/app/services/peticiones-api.service';
import { ProductosServicesService } from 'src/app/services/productos-services.service';
import { Movil } from 'src/assets/utils/Movil';

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.component.html',
  styleUrls: ['./moviles.component.css'],
})
export class MovilesComponent implements OnInit {

  movil:Observable<any[]> | undefined; //observable donde iran todos los elementos de la base de datos
  listaMoviles: Movil[];

  identificador:number;
  constructor(
    public servicioProductos: ProductosServicesService,
    private toastSvc: ToastrService,
    private apiService: PeticionesApiService,
    private bda:AngularFireDatabase
  ) {this.identificador = 0}
  
  listaCarritoNombre: any[]; //IGUAL QUE PERIFERICOS TS
  listaNuevaPrueba: any[] = [];
  movilSelected:Movil;
  listaMovilFiltrada:Movil[];
  
  ngOnInit(): void {

    var i = 0; // variable usada para hacer un ++ tantas veces como elementos en la base de datos haya y se inicializa a 0 cada vez quye salimos porque sino se repite y se añadirian otrea vez los mismos elementos x2 y con esto lo controlamos 
    this.movil = this.bda.list('Productos').valueChanges();  
    this.movil.forEach(element => {
      element.forEach(x => { 
        if (x.tipo == "movil") {
          i++;
        }          
        if (this.listaMoviles.length < i && x.tipo == "movil") {
          this.listaMoviles.push(x);   
        }    
      });
    });
    this.movilSelected={
      nombre: "",
      imagen:"",
      precio: 0,
      descripcion: "",
      capacidad:0,
      id:0,
      tipo:"movil",
      pixeles:0
    }
    this.identificador = this.servicioProductos.getIdentificador();
    this.listaMoviles = this.servicioProductos.getListaMoviles();
    this.listaCarritoNombre = this.servicioProductos.getListaCarrito();
    //this.listaNuevaPrueba = this.servicioProductos.getlistaCarritoPrecioImagen();
  }
  agregarCarrito(nombre: string, precio: number, imagen: string) {
    this.listaCarritoNombre.push(nombre);
    this.listaMoviles.forEach((objetoC) => {
      if (objetoC.nombre == nombre) {
          this.movilSelected={
          nombre: objetoC.nombre,
          imagen: objetoC.imagen,
          precio: objetoC.precio,
          descripcion: objetoC.descripcion,
          capacidad:objetoC.capacidad,
          id:this.identificador,
          tipo:objetoC.tipo,
          pixeles:objetoC.pixeles
        }
        this.identificador++;
        this.listaNuevaPrueba.push(this.movilSelected);
      }
    });
    this.servicioProductos.setIdentificador = this.identificador;
    this.servicioProductos.setListaNuevaPrueba = this.listaNuevaPrueba;
    this.toastSvc.success('Has añadido:' + nombre);
    this.listaNuevaPrueba = [];
  }
  filtrarMovil(nombre:string,precio:number){
    this.listaMovilFiltrada=[];
    this.listaMoviles.forEach((movil)=>{
      if (movil.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase())&&movil.precio.toString().includes(precio.toString())) {
        this.listaMovilFiltrada.push(movil);
      }
    });

  }
}
