import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStyleV1Component } from './list-style-v1.component';

describe('ListStyleV1Component', () => {
  let component: ListStyleV1Component;
  let fixture: ComponentFixture<ListStyleV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStyleV1Component]
    }).compileComponents();

    fixture = TestBed.createComponent(ListStyleV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
