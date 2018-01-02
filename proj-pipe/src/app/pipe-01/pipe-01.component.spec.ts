import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe01Component } from './pipe-01.component';

describe('Pipe01Component', () => {
  let component: Pipe01Component;
  let fixture: ComponentFixture<Pipe01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pipe01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pipe01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
