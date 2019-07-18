import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ShareModule } from '../share/share.module';
import { NewProjectComponent } from './new-project/new-project.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OwlDateTimeIntl } from 'ng-pick-datetime';


@NgModule({
  declarations: [ProjectListComponent, ProjectItemComponent, NewProjectComponent],
  imports: [
    ShareModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    ProjectRoutingModule,
  ],
  entryComponents:[NewProjectComponent],
})
export class ProjectModule { }
