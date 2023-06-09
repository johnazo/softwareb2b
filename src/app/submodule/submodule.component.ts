import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../core/application.service';
import { AppModule, AppState } from '../core/models';
import { Router } from '@angular/router';
import { AppDataService } from '../core/app-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-submodule',
  templateUrl: './submodule.component.html',
  styleUrls: ['./submodule.component.css']
})
export class SubmoduleComponent implements OnInit {

  genericImg: string = '/static/module.png'
  appState: AppState

  constructor(
    private applicationService: ApplicationService,
    private router: Router,
  ) {
    this.appState = this.applicationService.appStateValue
  }

  get app() {
    return this.appState.app
  }
  get module() {
    return this.appState.module
  }
  get submodule() {
    return this.appState.submodule
  }

  ngOnInit(): void {
    if (!this.appState || !this.appState.app || !this.appState.module)
      this.router.navigate(['/'])
  }

}
