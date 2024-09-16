import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceModalComponent } from './advance-modal.component';

describe('AdvanceModalComponent', () => {
  let component: AdvanceModalComponent;
  let fixture: ComponentFixture<AdvanceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceModalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
