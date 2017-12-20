import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoOitoComponent } from './servico-oito.component';

describe('ServicoOitoComponent', () => {
  let component: ServicoOitoComponent;
  let fixture: ComponentFixture<ServicoOitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoOitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoOitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
