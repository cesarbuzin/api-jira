import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvNotificationComponent } from './adv-notification.component';

const routes: Routes = [
  {
    path: '',
    component: AdvNotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvNotificationRoutingModule {}
