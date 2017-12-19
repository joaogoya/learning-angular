import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoUmComponent } from './servico-um.component';

describe('ServicoUmComponent', () => {
  let component: ServicoUmComponent;
  let fixture: ComponentFixture<ServicoUmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoUmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
