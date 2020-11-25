import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheLocalPage } from './detalhe-local.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheLocalPageRoutingModule {}
