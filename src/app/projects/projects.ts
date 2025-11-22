import { Component } from '@angular/core';
import { ProjectInfo } from '../project-info';
import { ProjectPreview } from '../project-preview/project-preview';

@Component({
  selector: 'app-projects',
  imports: [ProjectPreview],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projectsList: ProjectInfo[] = [];
  filteredProjectsList: ProjectInfo[] = [];

  constructor() {
    this.projectsList = [{
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

    this.filteredProjectsList = this.projectsList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredProjectsList = this.projectsList;
      return;
    }

    this.filteredProjectsList = this.projectsList.filter(project =>
      project?.title.toLowerCase().includes(text.toLowerCase()),);
  }
}
