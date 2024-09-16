import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTypeaheadComponent } from './form-typeahead.component';

describe('FormTypeaheadComponent', () => {
  let component: FormTypeaheadComponent;
  let fixture: ComponentFixture<FormTypeaheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTypeaheadComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
