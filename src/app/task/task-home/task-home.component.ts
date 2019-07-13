import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.sass']
})
export class TaskHomeComponent implements OnInit {
  data = [
    {
      listID: 1, prefix: "A-Z", endNum: 75, title: "チェック", items: [
        { itemID: 1, currenNum: 1, notice: "" },
        { itemID: 2, currenNum: 2, notice: "" },
        { itemID: 3, currenNum: 3, notice: "" },
        { itemID: 4, currenNum: 4, notice: "" },
        { itemID: 5, currenNum: 5, notice: "" },
      ]
    },
    {
      listID: 2, prefix: "A-Z", endNum: 75, title: "掃除", items: [
        { itemID: 1, currenNum: 1, notice: "" },
        { itemID: 2, currenNum: 2, notice: "" },
        { itemID: 3, currenNum: 3, notice: "" },
        { itemID: 4, currenNum: 4, notice: "" },
        { itemID: 5, currenNum: 5, notice: "" },
      ]
    },
    {
      listID: 3, prefix: "A-Z", endNum: 75, title: "梱包", items: [
        { itemID: 1, currenNum: 1, notice: "" },
        { itemID: 2, currenNum: 2, notice: "" },
        { itemID: 3, currenNum: 3, notice: "" },
        { itemID: 4, currenNum: 4, notice: "" },
        { itemID: 5, currenNum: 5, notice: "" },
      ]
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
