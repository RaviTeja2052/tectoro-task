import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRetirementComponent } from './my-retirement.component';

describe('MyRetirementComponent', () => {
  let component: MyRetirementComponent;
  let fixture: ComponentFixture<MyRetirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRetirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRetirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
