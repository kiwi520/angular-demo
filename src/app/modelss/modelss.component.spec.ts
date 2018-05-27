import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelssComponent } from './modelss.component';

describe('ModelssComponent', () => {
  let component: ModelssComponent;
  let fixture: ComponentFixture<ModelssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
