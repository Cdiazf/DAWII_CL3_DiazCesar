import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Pregunta2Component } from './pregunta2/pregunta2.component';
import { Pregunta3Component } from './pregunta3/pregunta3.component';
import { Pregunta4Component } from './pregunta4/pregunta4.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Pregunta2Component,
    Pregunta3Component,
    Pregunta4Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'menu',
        component:NavbarComponent,
        children: [
          {path:"pregunta2", component:Pregunta2Component},
          {path:"pregunta3", component:Pregunta3Component},
          {path:"pregunta4", component:Pregunta4Component}
        ]
    },
      {path:"", redirectTo: 'menu', pathMatch:"full"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
