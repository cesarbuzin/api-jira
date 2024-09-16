import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3CodeVerifyComponent } from './v3-code-verify.component';

describe('V3CodeVerifyComponent', () => {
  let component: V3CodeVerifyComponent;
  let fixture: ComponentFixture<V3CodeVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V3CodeVerifyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V3CodeVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
