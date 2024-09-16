import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPickerComponent } from './forms-picker.component';

describe('FormsPickerComponent', () => {
  let component: FormsPickerComponent;
  let fixture: ComponentFixture<FormsPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsPickerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
