import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponeteReusoComponent } from './componete-reuso.component';

describe('ComponeteReusoComponent', () => {
  let component: ComponeteReusoComponent;
  let fixture: ComponentFixture<ComponeteReusoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponeteReusoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponeteReusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
