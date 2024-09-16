import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2CodeVerifyComponent } from './v2-code-verify.component';

describe('V2CodeVerifyComponent', () => {
  let component: V2CodeVerifyComponent;
  let fixture: ComponentFixture<V2CodeVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V2CodeVerifyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V2CodeVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
