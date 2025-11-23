import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectInfo } from '../project-info';

@Component({
  selector: 'app-project-preview',
  imports: [RouterLink],
  templateUrl: './project-preview.html',
  styleUrl: './project-preview.css',
})
export class ProjectPreview {
  projectPreview = input.required<ProjectInfo>();
}
