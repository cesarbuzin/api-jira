// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sizing-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sizing-table.component.html',
  styleUrls: ['./sizing-table.component.scss']
})
export class SizingTableComponent {}
