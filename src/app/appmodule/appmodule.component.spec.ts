import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmoduleComponent } from './appmodule.component';

describe('AppmoduleComponent', () => {
  let component: AppmoduleComponent;
  let fixture: ComponentFixture<AppmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
