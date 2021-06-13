import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnadirProductosComponentsComponent } from './components/anadir-productos-components/anadir-productos-components.component';
import { CarritoComponentsComponent } from './components/carrito-components/carrito-components.component';
import { ConsolasComponent } from './components/consolas/consolas.component';
import { LoginComponent } from './components/login/login.component';
import { MovilesComponent } from './components/moviles/moviles.component';
import { PagarComponentsComponent } from './components/pagar-components/pagar-components.component';
import { PaginaInicialComponentsComponent } from './components/pagina-inicial-components/pagina-inicial-components.component';
import { PerifericosComponent } from './components/perifericos/perifericos.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';

const routes: Routes = [
  { path: 'home', component: PaginaInicialComponentsComponent },
  { path: 'consolas', component: ConsolasComponent },
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: 'anadir', component: AnadirProductosComponentsComponent },
  { path: 'perifericos', component: PerifericosComponent },
  { path: 'carrito', component: CarritoComponentsComponent },
  { path: 'pagar', component: PagarComponentsComponent },
  { path: 'moviles', component: MovilesComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
