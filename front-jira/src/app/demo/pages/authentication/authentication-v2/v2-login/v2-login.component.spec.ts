import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2LoginComponent } from './v2-login.component';

describe('V2LoginComponent', () => {
  let component: V2LoginComponent;
  let fixture: ComponentFixture<V2LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V2LoginComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V2LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
