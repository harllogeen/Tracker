import { Component, OnInit } from '@angular/core';
import { TASK } from '../mark-task';
import { Task } from '../Task-interface';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-the-tasks',
  templateUrl: './the-tasks.component.html',
  styleUrls: ['./the-tasks.component.css']
})
export class TheTasksComponent implements OnInit {
  myTask: Task[] = []

  constructor( private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((myTask:any)=>this.myTask = myTask);
  }

}
