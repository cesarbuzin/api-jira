import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3FrPasswordComponent } from './v3-fr-password.component';

describe('V3FrPasswordComponent', () => {
  let component: V3FrPasswordComponent;
  let fixture: ComponentFixture<V3FrPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V3FrPasswordComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V3FrPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
