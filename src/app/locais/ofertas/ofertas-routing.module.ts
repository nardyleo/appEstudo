import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertasPage } from './ofertas.page';

const routes: Routes = [
  {
    path: '',
    component: OfertasPage
  },
  {
    path: 'nova-oferta',
    loadChildren: () => import('./nova-oferta/nova-oferta.module').then( m => m.NovaOfertaPageModule)
  },
  {
    path: 'editar/:idLocal',
    loadChildren: () => import('./editar-oferta/editar-oferta.module').then( m => m.EditarOfertaPageModule)
  },
  {
    path: ':idLocal',
    loadChildren: () => import('./oferecer-reservas/oferecer-reservas.module').then( m => m.OferecerReservasPageModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertasPageRoutingModule {}
