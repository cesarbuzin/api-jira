import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtGoogleChartComponent } from './crt-google-chart.component';

describe('CrtGoogleChartComponent', () => {
  let component: CrtGoogleChartComponent;
  let fixture: ComponentFixture<CrtGoogleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrtGoogleChartComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CrtGoogleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
