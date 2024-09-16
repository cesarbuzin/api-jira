import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFriendRequestComponent } from './social-friend-request.component';

describe('SocialFriendRequestComponent', () => {
  let component: SocialFriendRequestComponent;
  let fixture: ComponentFixture<SocialFriendRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialFriendRequestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialFriendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
