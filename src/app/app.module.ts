import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModulesComponent } from './modules/modules.component';
import { HomeComponent } from './home/home.component';
import { ApplicationService } from './core/application.service';
import { AppDataService } from './core/app-data.service';
import { SubmodulesComponent } from './submodules/submodules.component';
import { SubmoduleComponent } from './submodule/submodule.component';

@NgModule({
  declarations: [
    AppComponent,
    ModulesComponent,
    HomeComponent,
    SubmodulesComponent,
    SubmoduleComponent
  ],
  imports: [
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApplicationService,
    AppDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
