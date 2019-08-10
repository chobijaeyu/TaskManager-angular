import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'card-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.sass']
})
export class TaskHomeComponent implements OnInit{
  ProjectData = {}
  futurDate:Date
  futurDate$: Observable<Date>

  TaskList = [{ Title: "チェック", Status: 1, data: [] }, { Title: "掃除", Status: 2, data: [] }, { Title: "梱包", Status: 3, data: [] }]

  constructor(
    private route: ActivatedRoute,
    private taskDataService: ProjectDataService,
  ) {
    let ID = this.route.snapshot.paramMap.get("ID")
    // when you can't get Deadline from observiable
    this.futurDate = new Date(this.route.snapshot.paramMap.get("Deadline"))
    this.taskDataService.GetOneProject(ID).subscribe(
      res => {
        this.ProjectData = res.Data
        console.log(this.ProjectData)
        // this.futurDate$ = of(new Date(res.Data['Deadline'])) 
        this.TaskList.forEach(el => {
          el.data = this.ProjectData['Tasklist'].filter(x => x["Status"] === el.Status)
        })
      },
      err => { console.error(err) }
    )

  }

  ngOnInit() {
  }
  
  handleTaskItemChanged(ev) {
    this.TaskList.forEach(el => {
      el.data = this.ProjectData['Tasklist'].filter(x => x["Status"] === el.Status)
    })
  }
}
