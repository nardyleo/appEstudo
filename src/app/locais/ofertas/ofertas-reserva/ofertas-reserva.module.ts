import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertasReservaPageRoutingModule } from './ofertas-reserva-routing.module';

import { OfertasReservaPage } from './ofertas-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertasReservaPageRoutingModule
  ],
  declarations: [OfertasReservaPage]
})
export class OfertasReservaPageModule {}
