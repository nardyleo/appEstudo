import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheLocalPageRoutingModule } from './detalhe-local-routing.module';

import { DetalheLocalPage } from './detalhe-local.page';
import { CriarReservaComponent } from '../../../reservas/criar-reserva/criar-reserva.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheLocalPageRoutingModule
  ],
  declarations: [DetalheLocalPage, CriarReservaComponent],
  entryComponents:[CriarReservaComponent]
})
export class DetalheLocalPageModule {}
