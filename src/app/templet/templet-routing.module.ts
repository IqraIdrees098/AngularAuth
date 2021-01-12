import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TempletPage } from './templet.page';

const routes: Routes = [
  {
    path: '',
    component: TempletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TempletPageRoutingModule {}
