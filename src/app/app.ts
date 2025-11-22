import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Projects } from './projects/projects'

@Component({
  selector: 'app-root',
  imports: [RouterLink, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TaskManager.Angular');
}
