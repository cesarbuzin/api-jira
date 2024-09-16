import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainErrorComponent } from './maintain-error.component';

describe('MaintainErrorComponent', () => {
  let component: MaintainErrorComponent;
  let fixture: ComponentFixture<MaintainErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintainErrorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintainErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
