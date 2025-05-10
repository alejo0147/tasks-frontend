import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/task';
import { mockTask } from '../../../utils/mocks/task';
import { TaskService } from '../../../services/task.service';
import { Router, RouterModule } from '@angular/router';
import { SharingDataService } from '../../../services/sharing-data.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  title: string = '';
  textTask = mockTask;
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private sharingData: SharingDataService,
    private router: Router
  ) {
    this.title = this.textTask.title;
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.tasks = this.router.getCurrentNavigation()?.extras.state!['tasks'];
    } else {
      this.taskService.findAll().subscribe(tasks => this.tasks = tasks);
    }
  }
  
  onRemoveTask(id: number): void {
    this.sharingData.idTaskEventEmitter.emit(id);   
  }

}
