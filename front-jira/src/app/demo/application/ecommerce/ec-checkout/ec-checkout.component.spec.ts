import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcCheckoutComponent } from './ec-checkout.component';

describe('EcCheckoutComponent', () => {
  let component: EcCheckoutComponent;
  let fixture: ComponentFixture<EcCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcCheckoutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EcCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
