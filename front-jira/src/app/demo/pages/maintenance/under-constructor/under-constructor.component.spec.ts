import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConstructorComponent } from './under-constructor.component';

describe('UnderConstructorComponent', () => {
  let component: UnderConstructorComponent;
  let fixture: ComponentFixture<UnderConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderConstructorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UnderConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
