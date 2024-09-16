import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActionbarsComponent } from './form-actionbars.component';

describe('FormActionbarsComponent', () => {
  let component: FormActionbarsComponent;
  let fixture: ComponentFixture<FormActionbarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormActionbarsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormActionbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
