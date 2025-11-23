import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getAllProject() {
    return [{
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
  }
}
