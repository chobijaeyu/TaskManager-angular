import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {path:'',loadChildren:()=>import('../project/project.module').then(m => m.ProjectModule)},
    {path:'taskList/:ID',loadChildren:()=>import('../task/task.module').then(m => m.TaskModule)},
    // { path: '', component:BaseComponent }
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    { path: '**',loadChildren:()=>import('../project/project.module').then(m => m.ProjectModule) },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
