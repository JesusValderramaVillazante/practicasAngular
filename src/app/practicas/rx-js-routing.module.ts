import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ejm1Component } from './ejm1/ejm1.component';

const routes: Routes = [
  {path: 'practicas', component: Ejm1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxJsRoutingModule { }
