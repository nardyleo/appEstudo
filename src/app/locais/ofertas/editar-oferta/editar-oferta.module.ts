import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarOfertaPageRoutingModule } from './editar-oferta-routing.module';

import { EditarOfertaPage } from './editar-oferta.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EditarOfertaPageRoutingModule
  ],
  declarations: [EditarOfertaPage]
})
export class EditarOfertaPageModule {}
