import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XroutingdummyComponent } from './xroutingdummy.component';

describe('XroutingdummyComponent', () => {
  let component: XroutingdummyComponent;
  let fixture: ComponentFixture<XroutingdummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XroutingdummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XroutingdummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
