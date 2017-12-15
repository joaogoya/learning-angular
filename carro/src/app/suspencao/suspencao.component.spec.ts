import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspencaoComponent } from './suspencao.component';

describe('SuspencaoComponent', () => {
  let component: SuspencaoComponent;
  let fixture: ComponentFixture<SuspencaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspencaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
