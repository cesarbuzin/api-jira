// Angular import
import { Component } from '@angular/core';

import { AuthenticationService } from 'src/app/theme/shared/service/authentication.service';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent {
  user?: null;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe((x) => x);
  }

  logout() {
    this.authenticationService.logout();
  }
}
