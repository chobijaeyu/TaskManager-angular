import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
    { path: '', component: ProjectListComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {}
