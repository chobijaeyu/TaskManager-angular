import { Component, OnInit, Input, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'card-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.sass']
})
export class TaskItemComponent implements OnInit,AfterViewInit {

   @Input() itemData  
  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }
}
