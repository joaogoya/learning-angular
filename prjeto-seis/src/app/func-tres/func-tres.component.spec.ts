import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncTresComponent } from './func-tres.component';

describe('FuncTresComponent', () => {
  let component: FuncTresComponent;
  let fixture: ComponentFixture<FuncTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
