// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//project Import
import { KanbanRoutingModule } from './kanban-routing.module';
import { KanbanComponent } from './kanban.component';
import { BoardComponent } from './board/board.component';
import { BacklogComponent } from './backlog/backlog.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// Third Party
import { DragulaModule, DragulaService } from 'ng2-dragula';

@NgModule({
  declarations: [KanbanComponent, BoardComponent, BacklogComponent],
  imports: [CommonModule, KanbanRoutingModule, DragulaModule, SharedModule],
  providers: [DragulaService]
})
export class KanbanModule {}
