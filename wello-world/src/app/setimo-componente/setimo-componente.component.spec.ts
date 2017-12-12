import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetimoComponenteComponent } from './setimo-componente.component';

describe('SetimoComponenteComponent', () => {
  let component: SetimoComponenteComponent;
  let fixture: ComponentFixture<SetimoComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetimoComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetimoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
