import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckComponent } from './check/check.component';
import { FormEjemploRoutingModule } from './form-ejemplo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormEjemploRoutingModule
  ],
  declarations: [CheckComponent]
})
export class FormEjemploModule { }
