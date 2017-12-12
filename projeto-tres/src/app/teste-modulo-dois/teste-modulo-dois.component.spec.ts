import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteModuloDoisComponent } from './teste-modulo-dois.component';

describe('TesteModuloDoisComponent', () => {
  let component: TesteModuloDoisComponent;
  let fixture: ComponentFixture<TesteModuloDoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteModuloDoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteModuloDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
