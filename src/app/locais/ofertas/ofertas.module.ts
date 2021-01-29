import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertasPageRoutingModule } from './ofertas-routing.module';
import { ItemOfertaComponent } from './item-oferta/item-oferta.component';
import { OfertasPage } from './ofertas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertasPageRoutingModule
  ],
  declarations: [OfertasPage,ItemOfertaComponent]
})
export class OfertasPageModule {}
