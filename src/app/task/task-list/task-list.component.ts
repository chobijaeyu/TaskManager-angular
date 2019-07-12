import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {

  @Input() item

  constructor() { }

  ngOnInit() {
  }

}
