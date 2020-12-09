import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usarioAutenticado = false;

  getUsuarioAutenticado(){
    return this._usarioAutenticado;
  }

  constructor() { }

  logIn(){
    this._usarioAutenticado = true;
  }

  logOut(){
    this._usarioAutenticado = false;
  }
}
