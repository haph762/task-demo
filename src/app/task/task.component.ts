import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.getData();
  }
  getData() {
    // this.tasks = [
    //   {
    //     id: '1',
    //     name: 'Name',
    //     description: 'test',
    //     user_id: '1',
    //     user_name: 'tesst',
    //     status: 'string'
    //   }
    // ];
    this.tasks = JSON.parse(localStorage.getItem('task'));
    if (!this.tasks) this.tasks = [];
  }
  add() {
    this.router.navigate(['/task/add']);
  }
}
