// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-breadcrumb',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './basic-breadcrumb.component.html',
  styleUrls: ['./basic-breadcrumb.component.scss']
})
export default class BasicBreadcrumbComponent {}
