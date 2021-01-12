import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryPagePage } from './entry-page.page';

const routes: Routes = [
  {
    path: '',
    component: EntryPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntryPagePageRoutingModule {}
