import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmSwitchComponent } from './frm-switch.component';

describe('FrmSwitchComponent', () => {
  let component: FrmSwitchComponent;
  let fixture: ComponentFixture<FrmSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmSwitchComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FrmSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
