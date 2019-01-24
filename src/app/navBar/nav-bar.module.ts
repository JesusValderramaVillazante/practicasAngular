import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';


import { NavBarRoutingModule } from './nav-bar-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavBarRoutingModule
  ],
  declarations: [NavbarComponent]
})
export class NavBarModule { }
