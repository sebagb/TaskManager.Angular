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
  projectService = inject(ProjectService);
  readonly projectsList: ProjectInfo[];
  filteredProjectsList: ProjectInfo[];

  constructor() {
    this.projectsList = this.projectService.getAllProject();
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
