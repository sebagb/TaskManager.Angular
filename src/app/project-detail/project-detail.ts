import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project-service';
import { ProjectInfo } from '../project-info';

@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  public project: ProjectInfo | undefined;

  private readonly route = inject(ActivatedRoute);
  private readonly service = inject(ProjectService);

  constructor() {
    const projectId = this.route.snapshot.params['id'];
    this.service
      .getProjectById(projectId)
      .then((project: ProjectInfo | undefined) => {
        this.project = project;
      });
  }
}
