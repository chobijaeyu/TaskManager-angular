import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './MaterialModule';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexDirective } from '../directive/flex.directive';
import { CountDownComponent } from './component/count-down/count-down.component';

const componentModuleList = [CommonModule, RouterModule, FormsModule, HttpClientModule,]
const shareComponentList = [ConfirmDialogComponent, FlexDirective, CountDownComponent]

@NgModule({
  declarations: [shareComponentList],
  imports: [MaterialModule, componentModuleList],
  exports: [MaterialModule, componentModuleList, shareComponentList],
  entryComponents: [ConfirmDialogComponent]
})
export class ShareModule { }
