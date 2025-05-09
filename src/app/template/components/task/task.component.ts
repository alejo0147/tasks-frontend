import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Task } from '../../../models/task';
import { mockTask } from '../../../utils/mocks/task';
import { TaskService } from '../../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {

  title: string = '';
  textTask = mockTask;
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {
    this.title = this.textTask.title;
  }

  ngOnInit(): void {
    const nav = this.router.getCurrentNavigation();
    const stateTasks = nav?.extras.state?.['tasks'];

    if (stateTasks) {
      this.tasks = stateTasks;
    } else {
      this.taskService.findAll().subscribe(tasks => {
        this.tasks = tasks;
        console.log('Tareas cargadas:', tasks); // para debug
      });
    }
  }

  mostrarAlerta() {
    Swal.fire({
      title: '¡Hola!',
      text: 'Esta es una alerta con SweetAlert2 en Angular',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

}
