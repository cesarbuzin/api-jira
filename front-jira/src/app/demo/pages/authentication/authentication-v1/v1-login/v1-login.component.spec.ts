import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1LoginComponent } from './v1-login.component';

describe('V1LoginComponent', () => {
  let component: V1LoginComponent;
  let fixture: ComponentFixture<V1LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V1LoginComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V1LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
