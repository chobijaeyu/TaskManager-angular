import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'card-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.sass']
})
export class TaskHomeComponent implements OnInit{
  ProjectData = {}
  futurDate: Date

  TaskList = [{ Title: "チェック", Status: 1, data: [] }, { Title: "掃除", Status: 2, data: [] }, { Title: "梱包", Status: 3, data: [] }]

  constructor(
    private route: ActivatedRoute,
    private taskDataService: ProjectDataService,
  ) {
    let ID = this.route.snapshot.paramMap.get("ID")
    // when you can get Deadline from observiable
    this.futurDate = new Date(this.route.snapshot.paramMap.get("Deadline"))
    console.log(ID)
    this.taskDataService.GetOneProject(ID).subscribe(
      res => {
        this.ProjectData = res.Data
        console.log(this.ProjectData)
        // this.futurDate = new Date(res.Data['Deadline'])
        console.log(this.futurDate)
        console.log(this.route.snapshot)
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
