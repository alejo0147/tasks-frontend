import { Routes } from '@angular/router';
import { TaskComponent } from './template/components/task/task.component';
import { TaskFormComponent } from './template/components/task-form/task-form.component';


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
    {
        path: 'tasks/create', 
        component: TaskFormComponent,
    },
];
