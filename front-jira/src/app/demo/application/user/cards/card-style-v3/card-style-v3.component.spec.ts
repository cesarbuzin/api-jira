import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStyleV3Component } from './card-style-v3.component';

describe('CardStyleV3Component', () => {
  let component: CardStyleV3Component;
  let fixture: ComponentFixture<CardStyleV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardStyleV3Component]
    }).compileComponents();

    fixture = TestBed.createComponent(CardStyleV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
