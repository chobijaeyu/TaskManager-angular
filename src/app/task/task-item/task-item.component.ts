import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.sass']
})
export class TaskItemComponent implements OnInit {

   @Input() litsData  
  items = this.litsData["items"]
  constructor() { }

  ngOnInit() {

  }

}
