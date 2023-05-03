import { Component, OnInit } from '@angular/core';
import { AppModule, AppState } from '../core/models';
import { ActivatedRoute, Router } from '@angular/router';
import { AppDataService } from '../core/app-data.service';
import { ApplicationService } from '../core/application.service';

@Component({
  selector: 'app-submodules',
  templateUrl: './submodules.component.html',
  styleUrls: ['./submodules.component.css']
})
export class SubmodulesComponent implements OnInit {

  state: AppState | null = null
  appSubModules: AppModule[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appDataService: AppDataService,
    private appService: ApplicationService,
  ) {

  }

  buttonClicked(item: any) {
    this.appService.setSubmodule(item)
  }

  private getApp(id: string) {
    let appId = parseInt(id)
    console.log(appId)
    this.router.navigate(["/"])
    return null
  }

  ngOnInit() {
    this.state = this.appService.appStateValue
    if (!this.state || !this.state.app || !this.state.module)
      this.router.navigate(['/'])
    else {
      this.appSubModules = this.appDataService.getAppSubModules(this.state.app, this.state.module)
    }
  }

}
