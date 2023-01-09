import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuilderInputPage } from './builder-input.page';

const routes: Routes = [
  {
    path: '',
    component: BuilderInputPage
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuilderInputPageRoutingModule {}
