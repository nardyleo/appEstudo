import { Component, OnInit } from '@angular/core';
import { Local } from '../local.model';
import { LocaisService } from '../locais.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {
  ofertas: Local[];
  teste: Local[];

  constructor(private locaisService: LocaisService) { }

  ngOnInit() {
    this.ofertas = this.locaisService.locais;
    this.ofertas = this.ofertas.reverse();
    console.log(this.ofertas);
    //aprender buscar ultimo elemento do indice
    
  }

}
