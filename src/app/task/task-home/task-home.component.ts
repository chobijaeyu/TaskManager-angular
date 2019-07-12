import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.sass']
})
export class TaskHomeComponent implements OnInit {
  taskLists = [
    {
      ID: 1, title: "チェック　Task", taskItems:
        [
          { itemID: 1, prefix: "Z-S", endNum: 75, notice: "" },
          { itemID: 2, prefix: "A-Z", endNum: 20, notice: "注意" }
        ]
    },
    {
      ID: 2, title: "掃除　Task", taskItems:
        [
          { itemID: 3, prefix: "A-B", endNum: 50, notice: "" }
        ]

    },
    {
      ID: 3, title: "梱包　Task", taskItems:
        [
          { itemID: 4, prefix: "T-B", endNum: 50, notice: "" }
        ]
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
