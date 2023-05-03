import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { ModulesComponent } from './modules/modules.component';
import { SubmodulesComponent } from './submodules/submodules.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'applications/:appid/modules', component: ModulesComponent },
  { path: 'applications/:appid/modules/:modid/submodules', component: SubmodulesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
