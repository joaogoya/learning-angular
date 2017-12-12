import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloTresComponent } from './modulo-tres.component';

describe('ModuloTresComponent', () => {
  let component: ModuloTresComponent;
  let fixture: ComponentFixture<ModuloTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
