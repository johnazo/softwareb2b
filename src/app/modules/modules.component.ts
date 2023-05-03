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

  state: AppState | null = null

  appModules: AppModule[] = []
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appDataService: AppDataService,
    private appService: ApplicationService,
  ) {

  }

  moduleClicked(item: any) {
    this.appService.setModule(item)
    this.router.navigate(['/applications/' + this.state!.app!.id + '/modules/' + item.id + '/submodules/'])
  }

  private getApp(id: string) {
    let appId = parseInt(id)
    console.log(appId)
    this.router.navigate(["/"])
    return null
  }

  ngOnInit() {
    this.state = this.appService.appStateValue
    if (!this.state || !this.state.app)
      this.router.navigate(['/'])
    else {
      this.appModules = this.appDataService.getAppModules(this.state.app)
    }
  }


}
