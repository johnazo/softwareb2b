import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from '../core/application.service';
import { AppApplication, AppState } from '../core/models';
import { AppDataService } from '../core/app-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  state: AppState | null = null
  apps: AppApplication[] = []
  genericImg: string = '/assets/img/application.png'

  constructor(
    private router: Router,
    private appService: ApplicationService,
    private appDataService: AppDataService
  ) { }

  appClicked(item: AppApplication) {
    this.appService.changeState({
      app: item, module: null, submodule: null
    })
    this.router.navigate(['/applications/' + item.id + '/modules'])
  }

  ngOnInit(): void {
    this.state = this.appService.appStateValue
    this.apps = this.appDataService.getApplications()
  }
}
