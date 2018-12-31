import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { RxJsRoutingModule } from './rx-js-routing.module';
import { Ejm1Component } from './ejm1/ejm1.component';
import { Ejm2Component } from './ejm2/ejm2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RxJsRoutingModule
  ],
  declarations: [Ejm1Component, Ejm2Component]
})
export class RxJsModule { }
