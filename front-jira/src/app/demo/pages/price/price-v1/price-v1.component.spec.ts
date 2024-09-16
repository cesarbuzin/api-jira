import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceV1Component } from './price-v1.component';

describe('PriceV1Component', () => {
  let component: PriceV1Component;
  let fixture: ComponentFixture<PriceV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceV1Component]
    }).compileComponents();

    fixture = TestBed.createComponent(PriceV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
