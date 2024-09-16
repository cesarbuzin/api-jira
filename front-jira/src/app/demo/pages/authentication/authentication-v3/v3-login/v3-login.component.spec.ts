import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3LoginComponent } from './v3-login.component';

describe('V3LoginComponent', () => {
  let component: V3LoginComponent;
  let fixture: ComponentFixture<V3LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V3LoginComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V3LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
