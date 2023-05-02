import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsubmoduleComponent } from './appsubmodule.component';

describe('AppsubmoduleComponent', () => {
  let component: AppsubmoduleComponent;
  let fixture: ComponentFixture<AppsubmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsubmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsubmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
