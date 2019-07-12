import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './MaterialModule';

const componentModuleList = [CommonModule,RouterModule]
@NgModule({
  declarations: [],
  imports: [MaterialModule, componentModuleList],
  exports: [MaterialModule, componentModuleList]
})
export class ShareModule { }
