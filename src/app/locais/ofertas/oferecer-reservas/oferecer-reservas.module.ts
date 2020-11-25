import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OferecerReservasPageRoutingModule } from './oferecer-reservas-routing.module';

import { OferecerReservasPage } from './oferecer-reservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OferecerReservasPageRoutingModule
  ],
  declarations: [OferecerReservasPage]
})
export class OferecerReservasPageModule {}
