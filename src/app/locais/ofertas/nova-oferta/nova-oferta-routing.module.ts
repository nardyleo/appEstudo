import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaOfertaPage } from './nova-oferta.page';

const routes: Routes = [
  {
    path: '',
    component: NovaOfertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaOfertaPageRoutingModule {}
