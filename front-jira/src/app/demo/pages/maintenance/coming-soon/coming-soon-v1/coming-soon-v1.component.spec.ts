import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonV1Component } from './coming-soon-v1.component';

describe('ComingSoonV1Component', () => {
  let component: ComingSoonV1Component;
  let fixture: ComponentFixture<ComingSoonV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComingSoonV1Component]
    }).compileComponents();

    fixture = TestBed.createComponent(ComingSoonV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
