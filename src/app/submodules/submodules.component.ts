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
  genericImg: string = '/assets/img/module.png'

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appDataService: AppDataService,
    private appService: ApplicationService,
  ) {

  }

  buttonClicked(event: Event, item: any) {
    event.stopPropagation()
    this.appService.setSubmodule(item)
    alert(item.url)
  }

  submoduleClicked(item: AppModule) {
    this.appService.setSubmodule(item)
    this.router.navigate(['applications', this.state!.app!.id, 'modules', this.state!.module!.id, 'submodule', item.id])
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
