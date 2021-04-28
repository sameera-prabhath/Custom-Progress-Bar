import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProgressComponent } from './custom-progress.component';

describe('CustomProgressComponent', () => {
  let component: CustomProgressComponent;
  let fixture: ComponentFixture<CustomProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
