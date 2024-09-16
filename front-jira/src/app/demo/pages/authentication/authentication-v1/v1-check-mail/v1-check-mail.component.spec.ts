import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1CheckMailComponent } from './v1-check-mail.component';

describe('V1CheckMailComponent', () => {
  let component: V1CheckMailComponent;
  let fixture: ComponentFixture<V1CheckMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V1CheckMailComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V1CheckMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
