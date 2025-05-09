import { Routes } from '@angular/router';
import { TaskComponent } from './template/components/task/task.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/tasks',
    },
    {
        path: 'tasks',
        component: TaskComponent,
    },
];
