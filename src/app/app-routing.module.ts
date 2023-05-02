import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareappComponent } from './softwareapp/softwareapp.component';
import { AppmoduleComponent } from './appmodule/appmodule.component';
import { AppsubmoduleComponent } from './appsubmodule/appsubmodule.component';

const routes: Routes = [
  { path: 'application', component: SoftwareappComponent },
  { path: 'appmodule', component: AppmoduleComponent },
  { path: 'appsubmodule', component: AppsubmoduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
