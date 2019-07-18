import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChangeDetectionStrategy } from '@angular/core';

export interface ConfirmDialog {
  title:string
  content:string    
  confirmAction:string
}

@Component({
  selector: 'card-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.sass'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent{

  dialog:ConfirmDialog

  constructor(
    @Inject(MAT_DIALOG_DATA)private data:any,
    private dialogRef:MatDialogRef<ConfirmDialogComponent>
  ) {
    if (this.data.dialog !== undefined || this.data.dialog !== null) {
      this.dialog = this.data.dialog
    }
   }

   handleAction(res:boolean){
     this.dialogRef.close(res)
   }
}
