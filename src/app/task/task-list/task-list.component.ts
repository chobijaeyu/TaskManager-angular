import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'card-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {

  @Input() task
  @Output() dataChanged: EventEmitter<any> = new EventEmitter()
  taskID
  item = []
  constructor(private dataService: ProjectDataService, ) { }

  ngOnInit() {
    this.taskID = this.task['Status']
  }

  handleMove(ev) {
    this.dataService.UpdateTask(ev.data['ID'], this.taskID).subscribe(
      res => {
        console.log(res),
        ev.data['Status'] = this.taskID
        // ev.data = Object.assign(ev.data,{changedTo:this.taskID})
          this.dataChanged.emit(this.taskID)

      },
      err => console.error(err)
    )

  }
}
