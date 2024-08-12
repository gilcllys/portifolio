import { Component } from '@angular/core';
import { ProjectModel } from '../../models/project';
import { BaseService } from '../service/base-service.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projectList: ProjectModel[] = [];
  constructor(private service: BaseService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectList = this.service.getProjectList;
  };


}
