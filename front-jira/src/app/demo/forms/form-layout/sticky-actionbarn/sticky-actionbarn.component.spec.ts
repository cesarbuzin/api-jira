import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyActionbarnComponent } from './sticky-actionbarn.component';

describe('StickyActionbarnComponent', () => {
  let component: StickyActionbarnComponent;
  let fixture: ComponentFixture<StickyActionbarnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickyActionbarnComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StickyActionbarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
