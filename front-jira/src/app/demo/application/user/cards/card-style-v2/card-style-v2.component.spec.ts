import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStyleV2Component } from './card-style-v2.component';

describe('CardStyleV2Component', () => {
  let component: CardStyleV2Component;
  let fixture: ComponentFixture<CardStyleV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardStyleV2Component]
    }).compileComponents();

    fixture = TestBed.createComponent(CardStyleV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
