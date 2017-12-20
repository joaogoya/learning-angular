import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoSeteComponent } from './servico-sete.component';

describe('ServicoSeteComponent', () => {
  let component: ServicoSeteComponent;
  let fixture: ComponentFixture<ServicoSeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoSeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoSeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
