// Angular import
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BerryConfig } from 'src/app/app-config';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit, OnDestroy {
  presetColor!: string;

  // Life cycle events
  ngOnInit(): void {
    (this.presetColor = BerryConfig.theme_color), (document.querySelector('body') as HTMLBodyElement).part.add('preset-5');
  }

  ngOnDestroy() {
    document.querySelector('body')?.classList.remove('landing-page');
  }
}
