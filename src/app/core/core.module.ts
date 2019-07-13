import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ShareModule } from '../share/share.module';
import { TaskModule } from '../task/task.module';
import { BaseComponent } from './base/base.component';
import { AppRoutingModule } from './app-routing.module';

const componentList = [HeaderComponent, BaseComponent]
@NgModule({
  declarations: [componentList],
  imports: [ShareModule, AppRoutingModule],
  exports: [componentList]
})
export class CoreModule { }
