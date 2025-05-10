import { Component } from '@angular/core';
import { TaskAppComponent } from './template/components/task-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TaskAppComponent   
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-app';
}
