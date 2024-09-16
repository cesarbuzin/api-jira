import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtPietyComponent } from './crt-piety.component';

describe('CrtPietyComponent', () => {
  let component: CrtPietyComponent;
  let fixture: ComponentFixture<CrtPietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrtPietyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CrtPietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
