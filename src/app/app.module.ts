import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HeroesModule } from './heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { RxJsModule } from './practicas/rx-js.module';
import { FormEjemploModule } from './formEjemplo/form-ejemplo.module';
import { NavBarModule } from './navBar/nav-bar.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { PruebaTemplateComponent } from './http-client/prueba-template/prueba-template.component';
import { PruebaModalComponent } from './http-client/prueba-modal/prueba-modal.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    HttpClientComponent,
    PruebaTemplateComponent,
    PruebaModalComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormEjemploModule,
    FormsModule,
    RxJsModule,
    HttpClientModule,
    NgbModule,
    HeroesModule,
    NavBarModule,
    CrisisCenterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
