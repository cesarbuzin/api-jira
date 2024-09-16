// Angular import
import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ClipboardModule } from 'ngx-clipboard';

@Component({
  selector: 'app-clipboard',
  standalone: true,
  imports: [CommonModule, SharedModule, ClipboardModule],
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss']
})
export default class ClipboardComponent implements OnInit {
  // private props
  text1!: string;
  text2!: string;
  textModal!: string;
  isCopied1!: boolean;
  isCopied2!: boolean;
  isCopied3!: boolean;
  basic = false;

  // Constructor
  constructor(private _clipboardService: ClipboardService) {}

  // Life cycle events
  ngOnInit(): void {
    this._clipboardService.copyResponse$.subscribe((re) => {
      if (re.isSuccess) {
        alert('copy success!');
      }
    });
  }

  // private method
  callServiceToCopy() {
    this._clipboardService.copy('This is copy thru service copyFromContent directly');
  }

  onCopyFailure() {
    alert('copy fail!');
  }
}
