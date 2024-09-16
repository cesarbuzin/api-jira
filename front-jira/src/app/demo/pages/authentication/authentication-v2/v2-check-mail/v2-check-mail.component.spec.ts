import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2CheckMailComponent } from './v2-check-mail.component';

describe('V2CheckMailComponent', () => {
  let component: V2CheckMailComponent;
  let fixture: ComponentFixture<V2CheckMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V2CheckMailComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(V2CheckMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
