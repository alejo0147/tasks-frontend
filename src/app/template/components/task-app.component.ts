import { Component } from '@angular/core';
import { Task } from '../../models/task';
import Swal from 'sweetalert2';
import { Router, RouterOutlet } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { SharingDataService } from '../../services/sharing-data.service';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'task-app',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
  ],
  templateUrl: './task-app.component.html',
  styleUrl: './task-app.component.css'
})
export class TaskAppComponent {

  tasks: Task[] = [];
  
    constructor(
      private router: Router,
      private service: TaskService,
      private sharingData: SharingDataService) {
    }
  
    ngOnInit(): void {
      this.service.findAll().subscribe(tasks => this.tasks = tasks);
      this.addTask();
      this.removeTask();
      this.findTaskById();
    }
  
    findTaskById() {
      this.sharingData.findTaskByIdEventEmitter.subscribe(id => {
        const task = this.tasks.find(task => task.id == id);
        this.sharingData.selectTaskEventEmitter.emit(task);
      })
    }
  
    addTask() {
      this.sharingData.newTaskEventEmitter.subscribe(task => {
        if (task.id > 0) {
          this.tasks = this.tasks.map(t => (t.id == task.id) ? { ...task } : t);
        } else {
          this.tasks = [... this.tasks, { ...task, id: new Date().getTime() }];
        }
        this.router.navigate(['/tasks'], { state: { tasks: this.tasks } });
        Swal.fire({
          title: "Guardado!",
          text: "Tarea guardada con exito!",
          icon: "success"
        });
      })
    }
  
    removeTask(): void {
      this.sharingData.idTaskEventEmitter.subscribe(id => {
        Swal.fire({
          title: "Seguro que quiere eliminar?",
          text: "Cuidado la tarea será eliminada del sistema!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si"
        }).then((result) => {
          if (result.isConfirmed) {
            this.tasks = this.tasks.filter(task => task.id != id);
            this.router.navigate(['/tasks/create'], { skipLocationChange: true }).then(() => {
              this.router.navigate(['/tasks'], { state: { tasks: this.tasks } });
            });
  
            Swal.fire({
              title: "Eliminado!",
              text: "Tarea eliminada con exito.",
              icon: "success"
            });
          }
        });
      });
    }

}
