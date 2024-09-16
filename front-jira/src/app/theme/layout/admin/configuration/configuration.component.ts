// Angular import
import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { BerryConfig } from 'src/app/app-config';
import { Location, LocationStrategy } from '@angular/common';
import { CustomsThemeService } from 'src/app/theme/shared/service/customs-theme.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigurationComponent implements OnInit {
  // public method
  styleSelectorToggle!: boolean; // open configuration menu
  layoutType!: string; // layout type
  rtlLayout!: boolean; // rtl type
  boxContainer!: boolean; // box container flag
  headerBackgroundColor!: string; // header background color
  setFontFamily!: string;
  bodyColor!: string; // berry Customizer
  navbarBackgroundColor!: string; // navbar background color
  navTitleColor!: string;
  menuTitleHide!: boolean;
  headerBackColor!: string;
  berryConfig: object;
  isConfig!: boolean;
  windowWidth: number;

  // Constructor
  constructor(
    private location: Location,
    private renderer: Renderer2,
    private locationStrategy: LocationStrategy,
    private theme: CustomsThemeService
  ) {
    this.berryConfig = BerryConfig;
    this.setThemeLayout();
    this.windowWidth = window.innerWidth;
  }

  // Life cycle events
  ngOnInit() {
    this.styleSelectorToggle = false;
    this.layoutType = BerryConfig.layout_type;
    this.setLayout(this.layoutType);
    this.setFontFamily = BerryConfig.font_family;
    this.fontFamily(this.setFontFamily);
    this.bodyColor = BerryConfig.theme_color;
    this.SetBodyColor(this.bodyColor);
    this.rtlLayout = BerryConfig.isRtl_layout;
    this.changeRtlLayout(this.rtlLayout);
    this.boxContainer = this.windowWidth >= 1025 ? BerryConfig.isBox_container : false;
    this.changeBoxContainer(this.boxContainer);
  }

  // public method
  setThemeLayout() {
    let current_url = this.location.path();
    const baseHref = this.locationStrategy.getBaseHref();
    if (baseHref) {
      current_url = baseHref + this.location.path();
    }

    switch (current_url) {
      case baseHref + '/layout/vertical':
        BerryConfig.layout = 'vertical';
        break;

      case baseHref + '/layout/compact':
        BerryConfig.layout = 'compact';
        break;

      case baseHref + '/layout/horizontal':
        BerryConfig.layout = 'horizontal';
        break;
    }
  }

  // change main layout
  setLayout(layout: string) {
    this.isConfig = true;
    document.querySelector('.coded-navbar')?.classList.remove('menu-dark');
    document.querySelector('.coded-navbar')?.classList.remove('navbar-dark');
    document.querySelector('.pc-header')?.classList.remove('header-dark');
    this.renderer.removeClass(document.body, 'berry-dark');
    this.SetBodyColor('preset-5');
    this.fontFamily('Roboto');

    this.layoutType = layout;
    if (layout === 'dark') {
      document.querySelector('.coded-navbar')?.classList.add('navbar-dark');
      document.querySelector('.pc-header')?.classList.add('header-dark');
      this.renderer.addClass(document.body, 'berry-dark');
    }
    if (layout === 'reset') {
      this.reset();
    }
  }

  reset() {
    this.ngOnInit();
  }

  setRtlLayout(e: Event) {
    const flag = (e.target as HTMLInputElement).checked;
    this.changeRtlLayout(flag);
  }

  changeRtlLayout(flag: boolean) {
    if (flag) {
      this.renderer.addClass(document.body, 'berry-rtl');
    } else {
      this.renderer.removeClass(document.body, 'berry-rtl');
    }
  }

  setBoxContainer(e: Event) {
    const flag = (e.target as HTMLInputElement).checked;
    this.changeBoxContainer(flag);
  }

  changeBoxContainer(flag: boolean) {
    if (flag) {
      document.querySelector('.coded-content')?.classList.add('container');
    } else {
      document.querySelector('.coded-content')?.classList.remove('container');
    }
  }

  fontFamily(font: string) {
    this.setFontFamily = font;
    this.renderer.removeClass(document.body, 'Roboto');
    this.renderer.removeClass(document.body, 'Poppins');
    this.renderer.removeClass(document.body, 'Inter');
    this.renderer.addClass(document.body, font);
  }

  SetBodyColor(background: string) {
    this.bodyColor = background;
    document.querySelector('body')?.part.remove('preset-1');
    document.querySelector('body')?.part.remove('preset-2');
    document.querySelector('body')?.part.remove('preset-3');
    document.querySelector('body')?.part.remove('preset-4');
    document.querySelector('body')?.part.remove('preset-5');
    document.querySelector('body')?.part.remove('preset-6');
    document.querySelector('body')?.part.remove('preset-7');
    document.querySelector('body')?.part.add(background);
    this.theme.customsTheme.next(background);
  }
}
