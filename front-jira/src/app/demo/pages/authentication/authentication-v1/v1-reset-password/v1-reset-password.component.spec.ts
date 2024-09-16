import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1ResetPasswordComponent } from './v1-reset-password.component';

describe('V1ResetPasswordComponent', () => {
  let component: V1ResetPasswordComponent;
  let fixture: ComponentFixture<V1ResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V1ResetPasswordComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V1ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
