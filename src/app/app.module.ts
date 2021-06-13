import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PaginaInicialComponentsComponent } from './components/pagina-inicial-components/pagina-inicial-components.component';
import { AnadirProductosComponentsComponent } from './components/anadir-productos-components/anadir-productos-components.component';
import { CarritoComponentsComponent } from './components/carrito-components/carrito-components.component';
import { PagarComponentsComponent } from './components/pagar-components/pagar-components.component';
import { ImagenesPipesPipe } from './pipes/imagenes-pipes.pipe';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseService } from './services/firebase.service';
import { ConsolasComponent } from './components/consolas/consolas.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { MovilesComponent } from './components/moviles/moviles.component';
import { PerifericosComponent } from './components/perifericos/perifericos.component';
import { MatSliderModule } from '@angular/material/slider';
import{ToastrModule}from 'ngx-toastr';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';


PdfMakeWrapper.setFonts(pdfFonts)



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PaginaInicialComponentsComponent,
    AnadirProductosComponentsComponent,
    CarritoComponentsComponent,
    PagarComponentsComponent,
    ImagenesPipesPipe,
    ConsolasComponent,
    VideojuegosComponent,
    MovilesComponent,
    PerifericosComponent,
    LoginComponent, 
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDvF7KLzph1C8eJqq7WDTDb_J6dUhX-7jE",
      authDomain: "tfg-ignacio-arroyo.firebaseapp.com",
      databaseURL: "https://tfg-ignacio-arroyo-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "tfg-ignacio-arroyo",
      storageBucket: "tfg-ignacio-arroyo.appspot.com",
      messagingSenderId: "1048738039204",
      appId: "1:1048738039204:web:a5681154d8f16845076d31",
      measurementId: "G-0Q79G6FDVN",
  }),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [FirebaseService,AngularFireAuth],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
