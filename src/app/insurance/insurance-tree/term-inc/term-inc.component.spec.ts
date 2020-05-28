import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermIncComponent } from './term-inc.component';

describe('TermIncComponent', () => {
  let component: TermIncComponent;
  let fixture: ComponentFixture<TermIncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermIncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
