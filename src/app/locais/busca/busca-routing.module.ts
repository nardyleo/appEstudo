import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscaPage } from './busca.page';

const routes: Routes = [
  {
    path: '',
    component: BuscaPage
  },
  {
    path: ':detalhe-local',
    loadChildren: () => import('./detalhe-local/detalhe-local.module').then( m => m.DetalheLocalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscaPageRoutingModule {}
