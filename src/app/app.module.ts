import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BulleComponent } from './resources/bulle/bulle.component';
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    BulleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, scrollPositionRestoration: 'top'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
