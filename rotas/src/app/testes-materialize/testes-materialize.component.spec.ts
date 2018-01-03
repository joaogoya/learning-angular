import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesMaterializeComponent } from './testes-materialize.component';

describe('TestesMaterializeComponent', () => {
  let component: TestesMaterializeComponent;
  let fixture: ComponentFixture<TestesMaterializeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestesMaterializeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestesMaterializeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
