import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSolto01Component } from './componente-solto-01.component';

describe('ComponenteSolto01Component', () => {
  let component: ComponenteSolto01Component;
  let fixture: ComponentFixture<ComponenteSolto01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteSolto01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteSolto01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
