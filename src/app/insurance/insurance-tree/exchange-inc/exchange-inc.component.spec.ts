import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeIncComponent } from './exchange-inc.component';

describe('ExchangeIncComponent', () => {
  let component: ExchangeIncComponent;
  let fixture: ComponentFixture<ExchangeIncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeIncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
