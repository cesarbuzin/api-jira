// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-styling-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './styling-table.component.html',
  styleUrls: ['./styling-table.component.scss']
})
export class StylingTableComponent {}
