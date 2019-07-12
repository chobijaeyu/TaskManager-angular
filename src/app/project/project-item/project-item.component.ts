import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.sass']
})
export class ProjectItemComponent implements OnInit {
  @Input() projectItem 
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onCardClick(ID){
    console.log("click ID",ID)
    this.router.navigate(['/taskHome'])
  }

}
