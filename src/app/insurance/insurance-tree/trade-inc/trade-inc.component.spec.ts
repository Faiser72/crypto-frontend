import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeIncComponent } from './trade-inc.component';

describe('TradeIncComponent', () => {
  let component: TradeIncComponent;
  let fixture: ComponentFixture<TradeIncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeIncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
