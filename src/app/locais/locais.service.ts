import { Injectable } from '@angular/core';
import { Local } from './local.model';

@Injectable({
  providedIn: 'root'
})
export class LocaisService {
  private _locais: Local[] = [

  new Local(
    'l1',
    'Residência Ouro Preto',
    'Linda residência no centro de OP',
    'https://i.pinimg.com/originals/a7/f9/7d/a7f97d7171aeceaffa47d9dad6940af6.jpg',
    '250'
  ),
  new Local(
    'l2',
    'Residência Buzios',
    'Linda residencia em Buzios, local perto de praia',
    'https://media-cdn.tripadvisor.com/media/photo-s/0c/c8/98/c9/img-20160825-100220-largejpg.jpg',
    '550'
  ),
  new Local(
    'l3',
    'Residência Arraial dAjuda',
    'Linda residencia em arraial',
    'https://www.aloalobahia.com/images/p/casa_maitei_alo_alo_bahia.jpg',
    '450'
  )
  ];

  get locais(){
    return [...this._locais];
  }

  constructor() { }
}
