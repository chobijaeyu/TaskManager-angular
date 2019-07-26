import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'card-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.sass']
})
export class ProjectItemComponent implements OnInit {
  @Input() projectItem
  @Output() Deleteproject= new EventEmitter()
  constructor(
    private dataService: ProjectDataService,
  ) { }

  ngOnInit() {
  }

  onDeleteProject(ID) {
    this.dataService.DeleteProject(ID).subscribe(
      res => {console.log(ID),this.Deleteproject.emit(ID)},
      err => console.error(err)
    )
  }
}