import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './MaterialModule';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { FormsModule } from '@angular/forms';

const componentModuleList = [CommonModule,RouterModule]
const Module = [FormsModule]
@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [MaterialModule, componentModuleList,Module],
  exports: [MaterialModule, componentModuleList,Module],
  entryComponents:[ConfirmDialogComponent]
})
export class ShareModule { }
