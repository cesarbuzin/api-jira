import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2FrPasswordComponent } from './v2-fr-password.component';

describe('V2FrPasswordComponent', () => {
  let component: V2FrPasswordComponent;
  let fixture: ComponentFixture<V2FrPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V2FrPasswordComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V2FrPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
