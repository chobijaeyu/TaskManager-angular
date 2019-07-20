import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'card-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.sass']
})
export class TaskHomeComponent implements OnInit {
  ProjectData ={}

  TaskList = [{Title:"チェック",Status:1,data:[]},{Title:"掃除",Status:2,data:[]},{Title:"梱包",Status:3,data:[]}]
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskDataService:ProjectDataService,
  ) {
    let ID = this.route.snapshot.paramMap.get("ID")
    console.log(ID) 
    this.taskDataService.GetOneProject(ID).subscribe(
      res =>{
        this.ProjectData = res.Data
        console.log(this.ProjectData)
        this.TaskList.forEach(el=>{
          el.data=this.ProjectData['Tasklist'].filter(x => x["Status"]===el.Status)
        })
      },
      err=>{console.error(err)}
    )

   }

  ngOnInit() {


  }

}
