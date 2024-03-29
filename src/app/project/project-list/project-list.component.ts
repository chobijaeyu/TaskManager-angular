import { Component, OnInit, OnChanges, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { take, } from 'rxjs/operators';

@Component({
  selector: 'card-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.sass']
})
export class ProjectListComponent implements OnInit {

  projectlist = []
  data: any
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private projectDataService: ProjectDataService,
    private CDR: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.projectDataService.GetProjectlist().subscribe(
      res => {
        console.log(res.Data)
        this.projectlist = res.Data
      },
      err => { console.error(err) },
      () => console.log('onOnit Observer got a complete notification'))
  }

  _deleteProject(event) {
    console.log(event)
    this.projectlist = this.projectlist.filter(x => x.ID !== event)
    this.CDR.markForCheck()
  }

  onClickCard(ID) {
    console.log("click card", ID)
    this.router.navigate(['taskHome/:ID', { Deadline: this.projectlist[ID]['Deadline'] }])
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: "リストを追加" } })

    dialogRef.afterClosed().pipe(
      take(1)
    ).subscribe(res => {
      console.log(res)
      for (var i = 1; i <= Number(res.EndNum); i++) {
        res.Tasklist.push({
          Prefix: res.Prefix,
          CurrentNum: i,
          Notice: "",
          Status: 1
        })
      }
      this.data = res
      this.sendProject(this.data)
    },
      () => console.log('Observer got a complete notification'))
  }

  sendProject(data) {
    this.projectDataService.NewProject(data).subscribe(
      res => {
        console.log(res)
        this.data.ID = res.ID
        console.log(this.data)
        this.projectlist.push(this.data)
      },
      err => {
        console.error(err)
      },
      () => console.log('Observer got a complete notification')
    )
  }
}
