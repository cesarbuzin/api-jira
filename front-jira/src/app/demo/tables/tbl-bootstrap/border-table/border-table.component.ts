// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-border-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './border-table.component.html',
  styleUrls: ['./border-table.component.scss']
})
export class BorderTableComponent {}
