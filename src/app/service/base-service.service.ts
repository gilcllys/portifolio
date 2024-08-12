import { Injectable } from '@angular/core';
import { project_data } from '../../data/project_data';
import { ProjectModel } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  _data: ProjectModel[] = project_data;

  constructor() { }

  get getProjectList(): ProjectModel[] {
    return this._data;
  }
}
