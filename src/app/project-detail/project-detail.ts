import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);
  readonly projectId: number;

  constructor() {
    this.projectId = parseInt(this.route.snapshot.params['id']);
  }
}
