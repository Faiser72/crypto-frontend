import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancedashboardComponent } from './insurancedashboard.component';

describe('InsurancedashboardComponent', () => {
  let component: InsurancedashboardComponent;
  let fixture: ComponentFixture<InsurancedashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancedashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
