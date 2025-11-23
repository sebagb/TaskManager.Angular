import { Injectable } from '@angular/core';
import { ProjectInfo } from './project-info';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public readonly projects: ProjectInfo[];

  constructor() {
    this.projects = [{
      id: '111111',
      deadline: 1201,
      status: 'Pending',
      tasks: [
        { id: '1a1a', projectId: '111111', title: 'Be', priority: 1 },
        { id: '1b1b', projectId: '111111', title: 'Present', priority: 2 },
        { id: '1c1c', projectId: '111111', title: 'Now', priority: 3 },],
      title: 'Love',
    },
    {
      id: '222222',
      deadline: 1201,
      status: 'Complete',
      tasks: [{ id: '2a2a', projectId: '222222', title: 'Work', priority: 2 }],
      title: 'Job',
    },
    {
      id: '333333',
      deadline: 1201,
      status: 'Halt',
      tasks: [{ id: '3a3a', projectId: '333333', title: 'Clean', priority: 1 }],
      title: 'Housing',
    }];
  }

  getAllProjects() {
    return this.projects;
  }

  getProjectById(id: string) {
    return this.projects.find(x => x.id === id);
  }
}
