import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentIncComponent } from './investment-inc.component';

describe('InvestmentIncComponent', () => {
  let component: InvestmentIncComponent;
  let fixture: ComponentFixture<InvestmentIncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentIncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
