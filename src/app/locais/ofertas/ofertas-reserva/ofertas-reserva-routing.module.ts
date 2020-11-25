import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertasReservaPage } from './ofertas-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: OfertasReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertasReservaPageRoutingModule {}
