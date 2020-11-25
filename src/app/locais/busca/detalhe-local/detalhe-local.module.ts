import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheLocalPageRoutingModule } from './detalhe-local-routing.module';

import { DetalheLocalPage } from './detalhe-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheLocalPageRoutingModule
  ],
  declarations: [DetalheLocalPage]
})
export class DetalheLocalPageModule {}
