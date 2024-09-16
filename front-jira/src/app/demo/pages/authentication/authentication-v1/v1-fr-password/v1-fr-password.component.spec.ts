import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1FrPasswordComponent } from './v1-fr-password.component';

describe('V1FrPasswordComponent', () => {
  let component: V1FrPasswordComponent;
  let fixture: ComponentFixture<V1FrPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V1FrPasswordComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V1FrPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
