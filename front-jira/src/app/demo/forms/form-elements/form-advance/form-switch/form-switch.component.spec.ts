import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSwitchComponent } from './form-switch.component';

describe('FormSwitchComponent', () => {
  let component: FormSwitchComponent;
  let fixture: ComponentFixture<FormSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSwitchComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
