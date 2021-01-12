import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpityListPage } from './empity-list.page';

const routes: Routes = [
  {
    path: '',
    component: EmpityListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpityListPageRoutingModule {}
