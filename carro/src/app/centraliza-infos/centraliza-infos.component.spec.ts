import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralizaInfosComponent } from './centraliza-infos.component';

describe('CentralizaInfosComponent', () => {
  let component: CentralizaInfosComponent;
  let fixture: ComponentFixture<CentralizaInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralizaInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralizaInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
