import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IeoIncComponent } from './ieo-inc.component';

describe('IeoIncComponent', () => {
  let component: IeoIncComponent;
  let fixture: ComponentFixture<IeoIncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IeoIncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IeoIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
