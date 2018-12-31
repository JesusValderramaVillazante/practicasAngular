import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ejm1Component } from './ejm1/ejm1.component';
import { Ejm2Component } from './ejm2/ejm2.component';


const routes: Routes = [
  {path: 'practicasRxJs/filtro', component: Ejm1Component},
  {path: 'practicasRxJs/timer', component: Ejm2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxJsRoutingModule { }
