import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: string;
  flag: boolean = false;
  mostrarInicio: boolean = false;
  isSignedIn = false;
  constructor(
    public firebase: FirebaseService, //servicio del firebase
    private toastSvc: ToastrService
  ) {}
  ngOnInit() {
    if (localStorage.getItem('user') !== null) this.isSignedIn = false; // esto detecta si el usuario esta con la sesion iniciada
    else this.isSignedIn = false;
  }
  async onSignup(email: string, password: string) {
    await this.firebase.onSignup(email, password).then(res=>{ // llama al metodo de registrarse
      if (this.firebase.isLoggedIn) this.isSignedIn = false;
    }).catch(err=>{
      this.toastSvc.error(err);
    });
    
  }
  async onSingin(email: string, password: string) {

      await this.firebase.onSingin(email, password).then(res=>{  //llama al metodo de iniciar sesion
        if (this.firebase.isLoggedIn && email == 'admin@gmail.com') {
          this.isSignedIn = true;
          this.flag = true; //linea 28 y 29 sirve para pasarle este parametro al navBar y saber si el que ha iniciado sesion es el admin o no si la bandera esta en true se mostrara el menu de admin
          this.firebase.setFlag = this.flag;
          this.usuario = email;
          this.firebase.setUsuario = this.usuario;
          this.toastSvc.success('Has iniciado sesion cómo  ' + this.usuario);
        } else {
          this.isSignedIn = true;
          this.usuario = email;
          this.firebase.setUsuario = this.usuario;
          this.toastSvc.success('Has iniciado sesion cómo  ' + this.usuario);
        }
      }).catch(err=>{
        this.toastSvc.error(err);
      });
    }

  handleLogout() {
    this.isSignedIn = false;
  }
}
