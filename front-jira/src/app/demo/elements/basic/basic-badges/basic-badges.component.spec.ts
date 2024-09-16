import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBadgesComponent } from './basic-badges.component';

describe('BasicBadgesComponent', () => {
  let component: BasicBadgesComponent;
  let fixture: ComponentFixture<BasicBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicBadgesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BasicBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
