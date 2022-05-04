import { Task } from './../Task-interface';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TASK } from '../mark-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor( private http:HttpClient) { }

  getTask(): Observable<Task[]> {
    const task = of(TASK)
    return task
  }
}
