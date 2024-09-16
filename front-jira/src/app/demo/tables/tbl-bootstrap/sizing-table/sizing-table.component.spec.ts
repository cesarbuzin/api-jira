import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizingTableComponent } from './sizing-table.component';

describe('SizingTableComponent', () => {
  let component: SizingTableComponent;
  let fixture: ComponentFixture<SizingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SizingTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SizingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
