// Angular import
import { Component, OnDestroy } from '@angular/core';
import { ChangeDetectorRef, Input, Output, EventEmitter, HostListener, Inject, Optional } from '@angular/core';

// third party
import { Observable, Subscription } from 'rxjs';
import { UI_SWITCH_OPTIONS } from './ui-switch.token';
import { UiSwitchModuleConfig } from './ui-switch.config';

@Component({
  selector: 'app-switch-config',
  templateUrl: './switch-config.component.html',
  styleUrls: ['./switch-config.component.scss']
})
export class SwitchConfigComponent implements OnDestroy {
  // private propss
  private _checked!: boolean;
  private _disabled!: boolean;
  private _reverse!: boolean;
  private _loading!: boolean;
  private _beforeChange!: Subscription;

  @Input() size;
  @Input() color;
  @Input() switchOffColor;
  @Input() switchColor;
  @Input() defaultBgColor;
  @Input() defaultBoColor;
  @Input() checkedLabel;
  @Input() uncheckedLabel;
  @Input() checkedTextColor;
  @Input() uncheckedTextColor;
  @Input() beforeChange!: Observable<boolean>;
  @Input()
  set checked(v: boolean) {
    this._checked = v !== false;
  }
  get checked() {
    return this._checked;
  }

  @Input()
  set disabled(v: boolean) {
    this._disabled = v !== false;
  }
  get disabled() {
    return this._disabled;
  }

  @Input()
  set reverse(v: boolean) {
    this._reverse = v !== false;
  }
  get reverse() {
    return this._reverse;
  }

  @Input()
  set loading(v: boolean) {
    this._loading = v !== false;
  }
  get loading() {
    return this._loading;
  }

  /**
   * Emits changed value
   */
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() change = new EventEmitter<boolean>();

  /**
   * Emits DOM event
   */
  @Output() changeEvent = new EventEmitter<MouseEvent>();

  /**
   * Emits changed value
   */
  @Output() valueChange = new EventEmitter<boolean>();

  // Constructor
  constructor(@Inject(UI_SWITCH_OPTIONS) @Optional() config: UiSwitchModuleConfig = {}, private cdr: ChangeDetectorRef) {
    this.size = (config && config.size) || 'medium';
    this.color = config && config.color;
    this.switchOffColor = config && config.switchOffColor;
    this.switchColor = config && config.switchColor;
    this.defaultBgColor = config && config.defaultBgColor;
    this.defaultBoColor = config && config.defaultBoColor;
    this.checkedLabel = config && config.checkedLabel;
    this.uncheckedLabel = config && config.uncheckedLabel;
    this.checkedTextColor = config && config.checkedTextColor;
    this.uncheckedTextColor = config && config.uncheckedTextColor;
  }

  ngOnDestroy() {
    if (this._beforeChange) {
      this._beforeChange.unsubscribe();
    }
  }

  // private method
  getColor(flag = '') {
    if (flag === 'borderColor') {
      return this.defaultBoColor;
    }
    if (flag === 'switchColor') {
      if (this.reverse) {
        return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
      }
      return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
    }
    if (flag === 'checkedTextColor') {
      return this.reverse ? this.uncheckedTextColor : this.checkedTextColor;
    }
    if (flag === 'uncheckedTextColor') {
      return this.reverse ? this.checkedTextColor : this.uncheckedTextColor;
    }
    if (this.reverse) {
      return !this.checked ? this.color : this.defaultBgColor;
    }
    return this.checked ? this.color : this.defaultBgColor;
  }

  onClick(event: MouseEvent) {
    if (this.disabled) {
      return;
    }
    this.checked = !this.checked;

    // Component events
    this.change.emit(this.checked);
    this.valueChange.emit(this.checked);
    this.changeEvent.emit(event);
    this.cdr.markForCheck();
  }

  @HostListener('click', ['$event'])
  onToggle(event: MouseEvent) {
    if (this.disabled) {
      return;
    }
    if (this.beforeChange) {
      this._beforeChange = this.beforeChange.subscribe((confirm: boolean) => {
        if (confirm) {
          this.onClick(event);
        }
      });
    } else {
      this.onClick(event);
    }
  }

  writeValue(obj: boolean): void {
    if (obj !== this.checked) {
      this.checked = !!obj;
    }
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
