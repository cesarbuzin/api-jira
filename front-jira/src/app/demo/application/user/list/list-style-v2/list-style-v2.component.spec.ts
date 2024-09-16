import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStyleV2Component } from './list-style-v2.component';

describe('ListStyleV2Component', () => {
  let component: ListStyleV2Component;
  let fixture: ComponentFixture<ListStyleV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStyleV2Component]
    }).compileComponents();

    fixture = TestBed.createComponent(ListStyleV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
