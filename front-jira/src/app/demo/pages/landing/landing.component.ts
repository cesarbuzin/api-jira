import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RouterModule } from '@angular/router';
import { BerryConfig } from 'src/app/app-config';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss', '../../../../scss/landing.scss'],
  encapsulation: ViewEncapsulation.None
})
export default class LandingComponent implements OnInit, OnDestroy {
  // public props
  landingLayout!: boolean;
  isCollapsed = true;

  // Life cycle events
  ngOnInit(): void {
    this.landingLayout = BerryConfig.isLanding;
    document.querySelector('body')?.classList.add('landing-page');
  }

  ngOnDestroy() {
    document.querySelector('body')?.classList.remove('landing-page');
  }
}
