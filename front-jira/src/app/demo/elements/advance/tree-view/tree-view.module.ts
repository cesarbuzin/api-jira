// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

// project Import
import { TreeViewRoutingModule } from './tree-view-routing.module';
import { TreeViewComponent } from './tree-view.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [TreeViewComponent],
  imports: [
    CommonModule,
    TreeViewRoutingModule,
    MatNativeDateModule,
    HttpClientModule,
    SharedModule,
    MatRippleModule,
    MatTreeModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class TreeViewModule {}
