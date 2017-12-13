import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFuncUmComponent } from './comp-func-um.component';

describe('CompFuncUmComponent', () => {
  let component: CompFuncUmComponent;
  let fixture: ComponentFixture<CompFuncUmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFuncUmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFuncUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
