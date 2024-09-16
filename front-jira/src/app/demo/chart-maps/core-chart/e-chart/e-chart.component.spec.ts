import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EChartComponent } from './e-chart.component';

describe('EChartComponent', () => {
  let component: EChartComponent;
  let fixture: ComponentFixture<EChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EChartComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
