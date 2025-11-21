import { Component, signal } from '@angular/core';
import { Projects } from './projects/projects'
@Component({
  selector: 'app-root',
  imports: [Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TaskManager.Angular');
}
