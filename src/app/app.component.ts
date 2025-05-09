import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './template/components/task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TaskComponent    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-app';
}
