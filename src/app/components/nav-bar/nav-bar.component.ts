
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ProductosServicesService } from 'src/app/services/productos-services.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    public serviciosProductos: ProductosServicesService,
    public firebase: FirebaseService
  ) {
    this.contadorCarrito = this.serviciosProductos.getListaCarrito();
  }
  usuario: string;
  bandera: boolean = false;

  contadorCarrito: any[] = [];

  ngOnInit(): void {
    
    this.contadorCarrito = this.serviciosProductos.getListaCarrito(); //sirve para el contador debajo del carrito que coge la lista con el getter porque ya hicimos setter desde los componentes de productos
    this.bandera = this.firebase.getFlag(); //ESTO ES PARA EL LOGIN SI ESTA TRUE SE MUESTRA AGREGAR PRODUCTOS Y SI ESTA EN FALSE SE ESCONDE
    this.usuario = this.firebase.getUsuario();
  }
}
