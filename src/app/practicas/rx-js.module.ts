import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { RxJsRoutingModule } from './rx-js-routing.module';
import { Ejm1Component } from './ejm1/ejm1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RxJsRoutingModule
  ],
  declarations: [Ejm1Component]
})
export class RxJsModule { }
