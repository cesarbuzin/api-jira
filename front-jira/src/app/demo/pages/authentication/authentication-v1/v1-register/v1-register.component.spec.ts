import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1RegisterComponent } from './v1-register.component';

describe('V1RegisterComponent', () => {
  let component: V1RegisterComponent;
  let fixture: ComponentFixture<V1RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V1RegisterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V1RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
