import { Component, OnDestroy, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';

import { Local } from '../local.model';
import { LocaisService } from '../locais.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit , OnDestroy {
  locaisCarregados: Local[];
  listedLocaisCarregados: Local[];
  private locaisSub: Subscription;

  constructor(private locaisService: LocaisService) { }

  ngOnInit() {

    this.locaisSub = this.locaisService.locais.subscribe(locais => {
      this.locaisCarregados = locais;
      this.listedLocaisCarregados = this.locaisCarregados.slice(1);
    })
  }

  onUpdateFiltro(evento: CustomEvent<SegmentChangeEventDetail>){
    console.log(evento.detail);
  }

  ngOnDestroy(){
    if (this.locaisSub){
      this.locaisSub.unsubscribe();
    }
  }

}
