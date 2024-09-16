import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import PaginaInicialComponent from './pagina-inicial/pagina-inicial.component';
import IndicesProjetosComponent from '../componentes/indices-projetos/indices-projetos.component';

const routes: Routes = [
  {
    path: 'pagina_inicial',
    component: PaginaInicialComponent
  },
  {
    path: 'PORTALB2B',
    component: IndicesProjetosComponent
  },
  {
    path: 'EDP',
    component: IndicesProjetosComponent
  },
  {
    path: 'APP',
    component: IndicesProjetosComponent
  },
  {
    path: 'SM',
    component: IndicesProjetosComponent
  },
  {
    path: 'SRE',
    component: IndicesProjetosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplePageRoutingModule {}
