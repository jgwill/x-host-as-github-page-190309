import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmaterialShapeComponent } from './xmaterial-shape.component';

describe('XmaterialShapeComponent', () => {
  let component: XmaterialShapeComponent;
  let fixture: ComponentFixture<XmaterialShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmaterialShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmaterialShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
