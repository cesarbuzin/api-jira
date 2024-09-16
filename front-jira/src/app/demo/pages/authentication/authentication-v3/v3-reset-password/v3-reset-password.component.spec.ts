import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3ResetPasswordComponent } from './v3-reset-password.component';

describe('V3ResetPasswordComponent', () => {
  let component: V3ResetPasswordComponent;
  let fixture: ComponentFixture<V3ResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V3ResetPasswordComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V3ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
