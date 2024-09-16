import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOffcanvasComponent } from './card-offcanvas.component';

describe('CardOffcanvasComponent', () => {
  let component: CardOffcanvasComponent;
  let fixture: ComponentFixture<CardOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardOffcanvasComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
