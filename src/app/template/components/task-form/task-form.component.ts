import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Task } from '../../../models/task';
import { SharingDataService } from '../../../services/sharing-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  task: Task;

  constructor(
    private route: ActivatedRoute,
    private sharingData: SharingDataService) {
    this.task = new Task();
  }

  ngOnInit(): void {

    this.sharingData.selectTaskEventEmitter.subscribe(task => this.task = task);

    this.route.paramMap.subscribe(params => {
      const id: number = +(params.get('id') || '0');

      if (id > 0) {
        this.sharingData.findTaskByIdEventEmitter.emit(id);
      }
    });
  }

  onSubmit(taskForm: NgForm): void {
    if (taskForm.valid) {
      this.sharingData.newTaskEventEmitter.emit(this.task);
      console.log(this.task);
    }
    taskForm.reset();
    taskForm.resetForm();
  }

  onClear(taskForm: NgForm): void {
    this.task = new Task();
    taskForm.reset();
    taskForm.resetForm();
  }

}
