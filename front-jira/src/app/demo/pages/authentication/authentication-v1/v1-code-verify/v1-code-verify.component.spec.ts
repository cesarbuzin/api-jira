import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1CodeVerifyComponent } from './v1-code-verify.component';

describe('V1CodeVerifyComponent', () => {
  let component: V1CodeVerifyComponent;
  let fixture: ComponentFixture<V1CodeVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V1CodeVerifyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V1CodeVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
