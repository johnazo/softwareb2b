import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoftwareappComponent } from './softwareapp/softwareapp.component';
import { AppmoduleComponent } from './appmodule/appmodule.component';
import { AppsubmoduleComponent } from './appsubmodule/appsubmodule.component';

@NgModule({
  declarations: [
    AppComponent,
    SoftwareappComponent,
    AppmoduleComponent,
    AppsubmoduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
