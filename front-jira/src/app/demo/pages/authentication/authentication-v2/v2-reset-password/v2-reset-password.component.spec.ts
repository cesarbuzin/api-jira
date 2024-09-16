import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2ResetPasswordComponent } from './v2-reset-password.component';

describe('V2ResetPasswordComponent', () => {
  let component: V2ResetPasswordComponent;
  let fixture: ComponentFixture<V2ResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V2ResetPasswordComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V2ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
