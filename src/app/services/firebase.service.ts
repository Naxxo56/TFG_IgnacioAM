import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  usuario: string;
  isLoggedIn = false;
  flag: boolean = false; //esta flag es para saber si es modo admin o cualquier otro
  constructor(public firebaseAuth: AngularFireAuth,public router:Router) {}
  async onSingin(email: string, password: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }

  async onSignup(email: string, password: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }
  set setFlag(flag: boolean) {
    this.flag = flag;
  }
  getFlag(): boolean {
    return this.flag;
  }
  set setUsuario(usuario: string) {
    this.usuario = usuario;
  }
  getUsuario(): string {
    return this.usuario;
  }
  logout(){
    try{
      this.firebaseAuth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['/home']);
    }catch(error){
      console.log(error);  
    }
  }
}
