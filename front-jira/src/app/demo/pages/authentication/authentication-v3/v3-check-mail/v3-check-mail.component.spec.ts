import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3CheckMailComponent } from './v3-check-mail.component';

describe('V3CheckMailComponent', () => {
  let component: V3CheckMailComponent;
  let fixture: ComponentFixture<V3CheckMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V3CheckMailComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V3CheckMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
