import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderTableComponent } from './border-table.component';

describe('BorderTableComponent', () => {
  let component: BorderTableComponent;
  let fixture: ComponentFixture<BorderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorderTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BorderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
