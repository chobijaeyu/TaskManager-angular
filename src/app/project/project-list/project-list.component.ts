import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.sass']
})
export class ProjectListComponent implements OnInit {

  projectlist = [
    { ID: 1, title: "A-Z", endNum: 50 },
    { ID: 2, title: "Z-S", endNum: 75 },
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickCard(ID) {
    console.log("click card",ID)
    this.router.navigate(['taskHome/:ID'])
  }
}
