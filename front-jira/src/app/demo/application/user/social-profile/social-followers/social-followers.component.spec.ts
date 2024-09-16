import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFollowersComponent } from './social-followers.component';

describe('SocialFollowersComponent', () => {
  let component: SocialFollowersComponent;
  let fixture: ComponentFixture<SocialFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialFollowersComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
