import { Routes } from '@angular/router';
import { Projects } from './projects/projects';
import { ProjectDetail } from './project-detail/project-detail';
import { UserAccess } from './user-access/user-access';

export const routes: Routes = [
    {
        path: '',
        component: Projects,
        title: 'Projects List',
    },
    {
        path: 'details/:id',
        component: ProjectDetail,
        title: 'Project Detail',
    },
    {
        path: 'user/access',
        component: UserAccess,
        title: 'User Access',
    },
];
