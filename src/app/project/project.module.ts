import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [ProjectListComponent, ProjectItemComponent],
  imports: [
    ShareModule,
    ProjectRoutingModule,
  ]
})
export class ProjectModule { }
