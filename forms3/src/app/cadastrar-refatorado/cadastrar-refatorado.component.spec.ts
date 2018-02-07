import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarRefatoradoComponent } from './cadastrar-refatorado.component';

describe('CadastrarRefatoradoComponent', () => {
  let component: CadastrarRefatoradoComponent;
  let fixture: ComponentFixture<CadastrarRefatoradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarRefatoradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarRefatoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
