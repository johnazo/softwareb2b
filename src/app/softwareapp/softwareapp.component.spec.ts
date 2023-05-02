import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareappComponent } from './softwareapp.component';

describe('SoftwareappComponent', () => {
  let component: SoftwareappComponent;
  let fixture: ComponentFixture<SoftwareappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
