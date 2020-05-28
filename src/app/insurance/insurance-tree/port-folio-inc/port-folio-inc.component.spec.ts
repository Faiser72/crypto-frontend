import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortFolioIncComponent } from './port-folio-inc.component';

describe('PortFolioIncComponent', () => {
  let component: PortFolioIncComponent;
  let fixture: ComponentFixture<PortFolioIncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortFolioIncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortFolioIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
