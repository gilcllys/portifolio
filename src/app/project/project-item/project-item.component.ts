import { Component, Input, input } from '@angular/core';
import { ProjectModel } from '../../../models/project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  @Input() project!: ProjectModel;
}
