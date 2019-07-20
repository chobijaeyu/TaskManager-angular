import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './MaterialModule';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexDirective } from '../directive/flex.directive';

const componentModuleList = [CommonModule,RouterModule,FormsModule,HttpClientModule]

@NgModule({
  declarations: [ConfirmDialogComponent,FlexDirective],
  imports: [MaterialModule, componentModuleList],
  exports: [MaterialModule, componentModuleList],
  entryComponents:[ConfirmDialogComponent]
})
export class ShareModule { }
