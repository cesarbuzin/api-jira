import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3RegisterComponent } from './v3-register.component';

describe('V3RegisterComponent', () => {
  let component: V3RegisterComponent;
  let fixture: ComponentFixture<V3RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V3RegisterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V3RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
