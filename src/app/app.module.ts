import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ApplicationsComponent } from './applications/applications.component';
import { ModulesComponent } from './modules/modules.component';
import { HomeComponent } from './home/home.component';
import { ApplicationService } from './core/application.service';
import { AppDataService } from './core/app-data.service';
import { SubmodulesComponent } from './submodules/submodules.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationsComponent,
    ModulesComponent,
    HomeComponent,
    SubmodulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    ApplicationService,
    AppDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
