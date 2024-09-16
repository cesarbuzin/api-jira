import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStyleV1Component } from './card-style-v1.component';

describe('CardStyleV1Component', () => {
  let component: CardStyleV1Component;
  let fixture: ComponentFixture<CardStyleV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardStyleV1Component]
    }).compileComponents();

    fixture = TestBed.createComponent(CardStyleV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
