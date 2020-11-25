import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaOfertaPageRoutingModule } from './nova-oferta-routing.module';

import { NovaOfertaPage } from './nova-oferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaOfertaPageRoutingModule
  ],
  declarations: [NovaOfertaPage]
})
export class NovaOfertaPageModule {}
