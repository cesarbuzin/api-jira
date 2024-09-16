import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeVerticalComponent } from './theme-vertical.component';

describe('ThemeVerticalComponent', () => {
  let component: ThemeVerticalComponent;
  let fixture: ComponentFixture<ThemeVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeVerticalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
