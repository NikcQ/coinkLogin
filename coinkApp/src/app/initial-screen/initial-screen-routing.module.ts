import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialScreenPage } from './initial-screen.page';

const routes: Routes = [
  {
    path: '',
    component: InitialScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitialScreenPageRoutingModule {}
