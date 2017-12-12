import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloDoisComponent } from './modulo-dois.component';

describe('ModuloDoisComponent', () => {
  let component: ModuloDoisComponent;
  let fixture: ComponentFixture<ModuloDoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloDoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
