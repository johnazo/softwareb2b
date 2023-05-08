import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppDataService } from '../core/app-data.service';
import { AppModule, AppState } from '../core/models';
import { ApplicationService } from '../core/application.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  state: AppState | null
  genericImg: string = '/static/assets/img/module.png'

  appModules: AppModule[] = []
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appDataService: AppDataService,
    private appService: ApplicationService,
  ) {
    this.state = this.appService.appStateValue
  }

  moduleClicked(item: any) {
    this.appService.setModule(item)
    this.router.navigate(['/applications/' + this.state!.app!.id + '/modules/' + item.id + '/submodules/'])
  }

  private getApp(id: string) {
    let appId = parseInt(id)
    this.router.navigate(["/"])
    return null
  }

  ngOnInit() {
    if (!this.state || !this.state.app)
      this.router.navigate(['/'])
    else {
      this.appModules = this.appDataService.getAppModules(this.state.app)
    }
  }


}
