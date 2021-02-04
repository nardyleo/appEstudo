import { Component, OnDestroy, OnInit } from '@angular/core';
import { Local } from '../local.model';
import { LocaisService } from '../locais.service';
import { Subscription } from 'rxjs';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit, OnDestroy {
  ofertas: Local[];
  teste: Local[];
  private locaisSub: Subscription;

  constructor(private locaisService: LocaisService,private router: Router) { }

  ngOnInit() {

    this.locaisSub = this.locaisService.locais.subscribe(locais => {
      this.ofertas = locais;
    });

    // this.ofertas = this.locaisService.locais;
    // this.ofertas = this.ofertas.reverse();
    // console.log(this.ofertas);
    //aprender buscar ultimo elemento do indice
  }

  onEditar(idOferta: string, itemsliding: IonItemSliding){
    itemsliding.close();
    this.router.navigate(['/','locais','tabs','ofertas','editar',idOferta]);
    console.log('editando',idOferta);
  }

  ngOnDestroy(){
    if(this.locaisSub) {
      this.locaisSub.unsubscribe();
    }
  }

}
