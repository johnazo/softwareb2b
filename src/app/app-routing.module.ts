import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
import { SubmodulesComponent } from './submodules/submodules.component';
import { HomeComponent } from './home/home.component';
import { SubmoduleComponent } from './submodule/submodule.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'applications/:appid/modules', component: ModulesComponent },
  { path: 'applications/:appid/modules/:modid/submodules', component: SubmodulesComponent },
  { path: 'applications/:appid/modules/:modid/submodule/:submodid', component: SubmoduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
