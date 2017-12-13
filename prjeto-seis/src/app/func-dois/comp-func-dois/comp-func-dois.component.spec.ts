import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFuncDoisComponent } from './comp-func-dois.component';

describe('CompFuncDoisComponent', () => {
  let component: CompFuncDoisComponent;
  let fixture: ComponentFixture<CompFuncDoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFuncDoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFuncDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
