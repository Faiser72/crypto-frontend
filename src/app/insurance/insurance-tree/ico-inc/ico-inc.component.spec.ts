import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoIncComponent } from './ico-inc.component';

describe('IcoIncComponent', () => {
  let component: IcoIncComponent;
  let fixture: ComponentFixture<IcoIncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcoIncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcoIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
