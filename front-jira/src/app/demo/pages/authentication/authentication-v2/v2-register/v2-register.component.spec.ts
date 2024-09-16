import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2RegisterComponent } from './v2-register.component';

describe('V2RegisterComponent', () => {
  let component: V2RegisterComponent;
  let fixture: ComponentFixture<V2RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V2RegisterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V2RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
