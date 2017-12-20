import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoSeisComponent } from './servico-seis.component';

describe('ServicoSeisComponent', () => {
  let component: ServicoSeisComponent;
  let fixture: ComponentFixture<ServicoSeisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoSeisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
