import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMulticolumnComponent } from './form-multicolumn.component';

describe('FormMulticolumnComponent', () => {
  let component: FormMulticolumnComponent;
  let fixture: ComponentFixture<FormMulticolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMulticolumnComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormMulticolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
