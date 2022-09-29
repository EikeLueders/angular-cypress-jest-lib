import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CypressjestLibModule } from "../../../cypressjest-lib/src/lib/cypressjest-lib.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CypressjestLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
