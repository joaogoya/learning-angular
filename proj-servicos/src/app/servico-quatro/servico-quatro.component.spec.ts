import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoQuatroComponent } from './servico-quatro.component';

describe('ServicoQuatroComponent', () => {
  let component: ServicoQuatroComponent;
  let fixture: ComponentFixture<ServicoQuatroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoQuatroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoQuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
