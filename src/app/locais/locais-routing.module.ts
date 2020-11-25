import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocaisPage } from './locais.page';

const routes: Routes = [
  {
    path: "tabs",
    component: LocaisPage,
    children: [
      {
        path: 'busca',
        loadChildren: () => import('./busca/busca.module').then( m => m.BuscaPageModule),
      },
      {
        path: 'ofertas',
        loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/locais/tabs/busca',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocaisPageRoutingModule {}
