import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrvPolicyComponent } from './prv-policy.component';

describe('PrvPolicyComponent', () => {
  let component: PrvPolicyComponent;
  let fixture: ComponentFixture<PrvPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrvPolicyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PrvPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
