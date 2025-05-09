import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private tasks: Task[] = [];

    private headers = new HttpHeaders({
        Authorization: 'Bearer VALIDO-TOKEN'
    });

    constructor(private http: HttpClient) { }

    findAll(): Observable<Task[]> {
        // return of(this.tasks);
        return this.http.get<Task[]>('http://localhost:8080/api/tasks', { headers: this.headers });
    }
}