import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usarioAutenticado = true;

  get usuarioAutenticado(){
    return this._usarioAutenticado;
  }

  constructor() { }

  logIn(){
    this._usarioAutenticado = true;
  }

  logOut(){
    this._usarioAutenticado = false;
    console.log(this.usuarioAutenticado);
  }
}
