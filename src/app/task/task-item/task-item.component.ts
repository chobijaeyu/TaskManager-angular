import { Component, OnInit, Input } from '@angular/core';
import { taskItem } from 'src/app/models/task.models';

@Component({
  selector: 'card-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.sass']
})
export class TaskItemComponent implements OnInit {

   @Input() items  

  constructor() { }

  ngOnInit() {

  }

}
