import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OferecerReservasPage } from './oferecer-reservas.page';

const routes: Routes = [
  {
    path: '',
    component: OferecerReservasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OferecerReservasPageRoutingModule {}
