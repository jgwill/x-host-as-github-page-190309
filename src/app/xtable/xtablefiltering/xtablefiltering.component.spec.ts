import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtablefilteringComponent } from './xtablefiltering.component';

describe('XtablefilteringComponent', () => {
  let component: XtablefilteringComponent;
  let fixture: ComponentFixture<XtablefilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtablefilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtablefilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
