import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { ShareModule } from '../share/share.module';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskRoutingModule } from './task-routing.module';

const componentList = [TaskListComponent, TaskItemComponent,TaskHomeComponent]
@NgModule({
  declarations: [componentList,],
  imports: [ShareModule, TaskRoutingModule],
  // exports:[componentList]
})
export class TaskModule { }
