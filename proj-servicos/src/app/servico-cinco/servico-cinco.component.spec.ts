import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoCincoComponent } from './servico-cinco.component';

describe('ServicoCincoComponent', () => {
  let component: ServicoCincoComponent;
  let fixture: ComponentFixture<ServicoCincoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoCincoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
