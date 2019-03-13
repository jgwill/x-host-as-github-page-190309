import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XusercardComponent } from './xusercard.component';

describe('XusercardComponent', () => {
  let component: XusercardComponent;
  let fixture: ComponentFixture<XusercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XusercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XusercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
