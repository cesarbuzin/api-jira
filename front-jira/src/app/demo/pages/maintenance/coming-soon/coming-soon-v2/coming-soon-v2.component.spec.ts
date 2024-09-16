import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonV2Component } from './coming-soon-v2.component';

describe('ComingSoonV2Component', () => {
  let component: ComingSoonV2Component;
  let fixture: ComponentFixture<ComingSoonV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComingSoonV2Component]
    }).compileComponents();

    fixture = TestBed.createComponent(ComingSoonV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
