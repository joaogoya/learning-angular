import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreioComponent } from './freio.component';

describe('FreioComponent', () => {
  let component: FreioComponent;
  let fixture: ComponentFixture<FreioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
