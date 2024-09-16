import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCompactComponent } from './theme-compact.component';

describe('ThemeCompactComponent', () => {
  let component: ThemeCompactComponent;
  let fixture: ComponentFixture<ThemeCompactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeCompactComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
