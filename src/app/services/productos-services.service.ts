import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { Consola } from 'src/assets/utils/Consola';
import { Movil } from 'src/assets/utils/Movil';
import { Periferico } from 'src/assets/utils/Periferico';
import { Videojuego } from 'src/assets/utils/Videojuego';

@Injectable({
  providedIn: 'root',
})
export class ProductosServicesService {
  constructor() {}
  listaConsolas: Consola[] = [];
  listaVideojuegos: Videojuego[] = [];
  listaPerifericos: Periferico[] = [];
  listaMoviles: Movil[] = [];

  identificador:number = 0;

  listaCarrito: any[] = []; //DOS LISTAS CREADAS SOLO PARA METER LAS COSAS EN EL CARRITO QUE AL FINAL SE JUNTARAN EN UNA LISTA AUN POR CREAR
  //listaCarritoPrecioImagen: any[] = [];

  listaNuevaPrueba: any[] = [];

  //CREACION DE GETTER  SETTER

  getListaConsola(): Consola[] {
    return this.listaConsolas;
  }

  set setlistaConsolas(listaConsolas: Consola[]) {
    this.listaConsolas = listaConsolas;
  }

  getIdentificador(): number {
    return this.identificador;
  }
  set setIdentificador(identificador: number) {
    this.identificador = identificador;
  }

  getListaVideojuegos(): Videojuego[] {
    return this.listaVideojuegos;
  }
  set setListaVideojuegos(listaVideojuegos: Videojuego[]) {
    this.listaVideojuegos = listaVideojuegos;
  }
  getListaMoviles(): Movil[] {
    return this.listaMoviles;
  }
  set setListaMoviles(listaMoviles: Movil[]) {
    this.listaMoviles = listaMoviles;
  }
  getListaPerifericos(): Periferico[] {
    return this.listaPerifericos;
  }
  set setListaPerifericos(listaPerifericos: Periferico[]) {
    this.listaPerifericos = listaPerifericos;
  }

  getListaCarrito(): any[] {
    return this.listaCarrito;
  }
  /*
  getlistaCarritoPrecioImagen(): any[] {
    return this.listaCarritoPrecioImagen;
  }
  */

  getListaNueva(): any[] {
    return this.listaNuevaPrueba;
  }

  set setListaNuevaPrueba(listaNuevaPrueba: any[]) {
    this.listaNuevaPrueba.push(listaNuevaPrueba);
  }

  set setListaCarrito(listaCarrito: any[]) {
    this.listaCarrito = listaCarrito;
  }

  coordenadas: any;
  getCoordenadas(): any[] {
    return this.coordenadas;
  }
  set setCoordenadas(coordenadas: any) {
    this.coordenadas = coordenadas;
  }
  /*
  set setlistaCarritoPrecioImagen(listaCarritoPrecioImagen: any[]) {
    this.listaCarritoPrecioImagen = listaCarritoPrecioImagen;
  }
  */
}
