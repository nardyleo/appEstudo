import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescobrirPageRoutingModule } from './descobrir-routing.module';

import { DescobrirPage } from './descobrir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescobrirPageRoutingModule
  ],
  declarations: [DescobrirPage]
})
export class DescobrirPageModule {}
