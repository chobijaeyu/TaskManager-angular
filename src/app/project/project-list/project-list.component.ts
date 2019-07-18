import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/share/component/confirm-dialog/confirm-dialog.component';
import { NewProjectComponent } from '../new-project/new-project.component';

@Component({
  selector: 'card-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.sass']
})
export class ProjectListComponent implements OnInit {

  projectlist = [
    { ID: 1, title: "A-Z", endNum: 50 },
    { ID: 2, title: "Z-S", endNum: 75 },
  ]
  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  onClickCard(ID) {
    console.log("click card", ID)
    this.router.navigate(['taskHome/:ID'])
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: "リストを追加" } })

    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
    })
  }
}
