import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloVidaCompoComponent } from './ciclo-vida-compo.component';

describe('CicloVidaCompoComponent', () => {
  let component: CicloVidaCompoComponent;
  let fixture: ComponentFixture<CicloVidaCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloVidaCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloVidaCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
