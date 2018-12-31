import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckComponent } from '../formEjemplo/check/check.component';

const routes: Routes = [
  {path: 'check', component: CheckComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormEjemploRoutingModule { }
