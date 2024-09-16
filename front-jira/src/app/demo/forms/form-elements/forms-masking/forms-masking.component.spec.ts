import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsMaskingComponent } from './forms-masking.component';

describe('FormsMaskingComponent', () => {
  let component: FormsMaskingComponent;
  let fixture: ComponentFixture<FormsMaskingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsMaskingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormsMaskingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
