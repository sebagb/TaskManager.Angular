import { Injectable } from '@angular/core';
import { ProjectInfo } from './project-info';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly base = 'http://localhost:8080/projects';

  public async getAllProjects(): Promise<ProjectInfo[]> {
    const data = await fetch(this.base);
    return (await data.json()) ?? [];
  }

  public async getProjectById(id: string): Promise<ProjectInfo | undefined> {
    const url = `${this.base}/${id}`;
    const data = await fetch(url);
    return (await data.json()) ?? {};
  }
}
