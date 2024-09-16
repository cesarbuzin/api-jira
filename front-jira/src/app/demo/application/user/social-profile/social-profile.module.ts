// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project Import
import { SocialProfileRoutingModule } from './social-profile-routing.module';
import { SocialProfileComponent } from './social-profile.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third Party
import { SweetAlert2Module, SweetAlert2LoaderService } from '@sweetalert2/ngx-sweetalert2';
import { ProfileComponent } from './profile/profile.component';
import { SocialFriendsComponent } from './social-friends/social-friends.component';
import { SocialFollowersComponent } from './social-followers/social-followers.component';
import { SocialGalleryComponent } from './social-gallery/social-gallery.component';
import { SocialFriendRequestComponent } from './social-friend-request/social-friend-request.component';

@NgModule({
  declarations: [
    SocialProfileComponent,
    ProfileComponent,
    SocialFriendsComponent,
    SocialFollowersComponent,
    SocialGalleryComponent,
    SocialFriendRequestComponent
  ],
  imports: [CommonModule, SocialProfileRoutingModule, SharedModule, SweetAlert2Module.forRoot()],
  providers: [SweetAlert2LoaderService]
})
export class SocialProfileModule {}
