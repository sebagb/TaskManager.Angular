import { Component, inject } from '@angular/core';
import { ProjectInfo } from '../project-info';
import { ProjectPreview } from '../project-preview/project-preview';
import { ProjectService } from '../project-service';

@Component({
  selector: 'app-projects',
  imports: [ProjectPreview],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly projectService = inject(ProjectService);
  private projectsList: ProjectInfo[];
  public filteredProjectsList: ProjectInfo[];

  constructor() {
    this.projectsList = [];
    this.filteredProjectsList = [];

    this.projectService
      .getAllProjects()
      .then((list: ProjectInfo[]) => {
        this.projectsList = list;
        this.filteredProjectsList = list;
      })
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
