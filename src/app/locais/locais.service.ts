import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
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
    250,
    new Date('2021-01-01'),
    new Date('2021-12-31'),
    'abc'
  ),
  new Local(
    'l2',
    'Residência Buzios',
    'Linda residencia em Buzios, local perto de praia',
    'https://media-cdn.tripadvisor.com/media/photo-s/0c/c8/98/c9/img-20160825-100220-largejpg.jpg',
    550,
    new Date('2021-01-01'),
    new Date('2021-12-31'),
    'abc'
  ),
  new Local(
    'l3',
    'Residência Arraial dAjuda',
    'Linda residencia em arraial',
    'https://www.aloalobahia.com/images/p/casa_maitei_alo_alo_bahia.jpg',
    450,
    new Date('2021-01-01'),
    new Date('2021-12-31'),
    'abc'
  )
  ];

  get locais(){
    return [...this._locais];
  }

  getLocal(id: string){
    return {...this._locais.find(p => p.id === id)};
  }

  constructor(private authService: AuthService) { }

  addLocal(
    titulo: string,
    descricao: string,
    preco: number,
    dataDe: Date,
    dataAte: Date
  ){
    const novoLocal = new Local(
      Math.random.toString(),
      titulo,
      descricao,
      'https://i.pinimg.com/originals/a7/f9/7d/a7f97d7171aeceaffa47d9dad6940af6.jpg',
      preco,
      dataDe,
      dataAte,
      this.authService.userId
    );

    this._locais.push(novoLocal);

  }
}
