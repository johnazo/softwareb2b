import { Component } from '@angular/core';
import { AppState } from './core/models';
import { ApplicationService } from './core/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'softwareb2b';


  constructor(
    private applicationService: ApplicationService,
    private router: Router
  ) { }

  appBtnClicked() {
    this.applicationService.changeState({
      app: this.appState.app, module: null, submodule: null
    })
    this.router.navigate(['applications', this.appState.app?.id, 'modules'])
  }
  modBtnClicked() {
    this.applicationService.changeState({
      app: this.appState.app, module: this.appState.module, submodule: null
    })
    this.router.navigate(['applications', this.appState.app?.id, 'modules', this.appState.module?.id, 'submodules'])
  }
  subBtnClicked() {
  }


  get appState() {
    return this.applicationService.appStateValue
  }

}
