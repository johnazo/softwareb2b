import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from '../core/application.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {


  constructor(
    private router: Router,
    private appService: ApplicationService
  ) { }

  appClicked(item: any) {
    this.router.navigate(['/app/' + item + '/modules'])
  }

  ngOnInit() {
  }


}
