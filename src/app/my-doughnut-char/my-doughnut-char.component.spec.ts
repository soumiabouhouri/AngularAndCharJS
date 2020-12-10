import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDoughnutCharComponent } from './my-doughnut-char.component';

describe('MyDoughnutCharComponent', () => {
  let component: MyDoughnutCharComponent;
  let fixture: ComponentFixture<MyDoughnutCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDoughnutCharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDoughnutCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
