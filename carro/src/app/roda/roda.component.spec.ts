import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RodaComponent } from './roda.component';

describe('RodaComponent', () => {
  let component: RodaComponent;
  let fixture: ComponentFixture<RodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
