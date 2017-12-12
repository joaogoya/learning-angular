import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDetalheComponent } from './componente-detalhe.component';

describe('ComponenteDetalheComponent', () => {
  let component: ComponenteDetalheComponent;
  let fixture: ComponentFixture<ComponenteDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
