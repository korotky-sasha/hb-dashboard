import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule }        from "@angular/material/sidenav";
import { MatListModule }           from "@angular/material/list";
import { MatIconModule }           from "@angular/material/icon";
import { MatButtonModule }         from "@angular/material/button";
import { MatMenuModule }           from "@angular/material/menu";
import { MatCardModule }           from "@angular/material/card";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { MatSelectModule }  from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
