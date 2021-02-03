import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usarioAutenticado = true;
  private _usuarioId = 'abc';

  get usuarioAutenticado(){
    return this._usarioAutenticado;
  }

  get userId(){
    return this._usuarioId;
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
