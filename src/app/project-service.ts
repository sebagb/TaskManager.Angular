import { Injectable } from '@angular/core';
import { ProjectInfo } from './project-info';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public readonly projects: ProjectInfo[];

  constructor() {
    this.projects = [{
      id: 111111,
      deadline: 1201,
      status: 'Pending',
      tasks: '',
      title: 'Love',
    },
    {
      id: 222222,
      deadline: 1201,
      status: 'Complete',
      tasks: '',
      title: 'Job',
    },
    {
      id: 333333,
      deadline: 1201,
      status: 'Halt',
      tasks: '',
      title: 'Housing',
    }];
  }

  getAllProjects() {
    return this.projects;
  }

  getProjectById(id: number) {
    return this.projects.find(x => x.id == id);
  }
}
