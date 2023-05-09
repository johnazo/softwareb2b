import { Component, OnInit } from '@angular/core';
import { AppModule, AppState } from '../core/models';
import { ActivatedRoute, Router } from '@angular/router';
import { AppDataService } from '../core/app-data.service';
import { ApplicationService } from '../core/application.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-submodules',
  templateUrl: './submodules.component.html',
  styleUrls: ['./submodules.component.css']
})
export class SubmodulesComponent implements OnInit {

  appState: AppState | null = null
  appSubModules: AppModule[] = []
  genericImg: string = '/static/assets/img/module.png'

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appDataService: AppDataService,
    private appService: ApplicationService,
    private location: Location
  ) {
    this.appState = this.appService.appStateValue
    if (!this.appState || !this.appState.app || !this.appState.module)
      this.router.navigate(['/'])
    else
      this.appSubModules = this.appDataService.getAppSubModules(this.appState.app, this.appState.module)
  }

  buttonClicked(event: Event, item: any) {
    event.stopPropagation()
    this.appService.setSubmodule(item)
    alert(item.url)
  }

  submoduleClicked(item: AppModule) {
    this.appService.setSubmodule(item)
    this.router.navigate(['applications', this.appState!.app!.id, 'modules', this.appState!.module!.id, 'submodule', item.id])
  }

  private getApp(id: string) {
    let appId = parseInt(id)
    console.log(appId)
    this.router.navigate(["/"])
    return null
  }

  ngOnInit() {
    if (!this.appSubModules || !this.appSubModules.length) {
      this.location.back()
    }

  }

}
