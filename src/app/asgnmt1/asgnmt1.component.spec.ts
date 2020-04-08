import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Asgnmt1Component } from './asgnmt1.component';

describe('Asgnmt1Component', () => {
  let component: Asgnmt1Component;
  let fixture: ComponentFixture<Asgnmt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Asgnmt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Asgnmt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
