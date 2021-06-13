import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { ProductosServicesService } from 'src/app/services/productos-services.service';
import * as L from 'leaflet';
import { PeticionesApiService } from 'src/app/services/peticiones-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carrito-components',
  templateUrl: './carrito-components.component.html',
  styleUrls: ['./carrito-components.component.css'],
})
export class CarritoComponentsComponent implements OnInit {
  //listaCarritoNombre: any[] = [];
  listaNueva: any[]=[];
  listaCarrito: any[]=[];
  precioFinal: number = 0;
  geojsonFeature:any;
  marker:any

  constructor(public servicioCarrito: ProductosServicesService,public apiMapa : PeticionesApiService,private gestorRutas: Router) {}

  mapa: Mapboxgl.Map; //Creamos el mapa tipandolo como mapboxgl.map el mapboxgl es el nobmre que le damos en el import como en BDA y luego .Map para saber q es mapa porque accedemos a ese tipo
  latLongFinal: Mapboxgl.LngLat; //Accedemos a la longitud y latitud
  latLongFinalMostrar:any;
  ngOnInit(): void {
    this.geojsonFeature = {
      type: 'FeatureCollection'
      ,features:[]
    };

    (Mapboxgl as any).accessToken =
      'pk.eyJ1IjoibmF4eG81NiIsImEiOiJja243ZGJudnYwbXVyMnJzNHo2NDZ5NDN4In0.dRV-g-m3PhwftDW3furTTw'; //Token que te lo da la pagina para poder usarlo
    this.mapa = new Mapboxgl.Map({
      container: 'mapa', //Aqui creamos el mapa ya bien bien y decimos el container(donde va a ir situado el mapa), el style que es el de la pagina, center que es cuando enciendas el mapa donde te situa
      style: 'mapbox://styles/mapbox/streets-v11', //el zoom pues lo que significa zoom :d
      center: [-3.74922, 40.463667],
      zoom: 5,
    });
    //punto predeterminado al empezar, es un marcador que iremos moviendo
    this.crearMarcador(-3.8321266502597666, 40.35191697150731);
    this.mapa.addControl(new Mapboxgl.NavigationControl()); //implementa el acercar,alejar y rotar el mapa
    this.mapa.addControl(new Mapboxgl.FullscreenControl()); //implementa el fullscreen
    this.mapa.addControl(
      new Mapboxgl.GeolocateControl({
        //pulsas y te lleva a tu ubicacion
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true, //si hay un cambio lo detectara y se actualizara;
      })
    );

    this.listaNueva = this.servicioCarrito.getListaNueva();
    this.listaCarrito = this.servicioCarrito.getListaCarrito();
    this.listaNueva.forEach((element) => {
      //ESTO CALCULA EL PRECIO FINAL QUE HACE LA SUMA DE TODOS LOS PRECIOS Y SI LO HAGO POR SEPARADO LO HAGO CON LAS 5 LISTAS Y AU
      element.forEach((elemento) => {
        this.precioFinal += elemento.precio;
      });
    });  
  }

  crearMarcador(long: number, lat: number) {
     this.marker = new Mapboxgl.Marker({
      draggable: true, //El draggable lo que hace es que puedas REPOSICIONAR el MARKER si esta en TRUE
      
    })
      .setLngLat([long, lat])
      .addTo(this.mapa);
      this.marker.on('drag', () => {
      //Drag significa Fire while dragging que significa que siga mientras se dispara es decir mientras se arrastra
      this.latLongFinal = this.marker.getLngLat(); //y con esta linea usamos la variable creada al principio para poner en que latitud/longitud dejamos el marker
      this.servicioCarrito.setCoordenadas = this.latLongFinal;
      
      this.apiMapa.getLatLngMapa(this.marker.getLngLat().lng,this.marker.getLngLat().lat).subscribe((data:any)=>{
        L.geoJSON(this.geojsonFeature).addTo(this.mapa)
        this.latLongFinalMostrar = data.features[0].place_name;
        this.servicioCarrito.setCoordenadas = this.latLongFinalMostrar;
      })  
    });
  }
  vacio(){
    if(this.listaNueva.length==0){
      alert("No tienes ningun producto agregado al carrito.")
    }else{
      this.gestorRutas.navigate(['pagar']);
    }
  }
  
  eliminarProducto(identificador: number){
    for (let index = 0; index < this.listaNueva.length; index++) {
      const element = this.listaNueva[index];
      for (let index2 = 0; index2 < element.length; index2++) {
        const elementoEliminar = element[index2]; 
        if (elementoEliminar.id == identificador) {     
          this.listaNueva.splice(index,1) 
          this.listaCarrito.splice(index,1)
          this.precioFinal =this.precioFinal-elementoEliminar.precio;         
        }        
      }   
    }
    if (this.listaNueva.length == 0) {
      this.precioFinal = 0;
    }
  }
}
