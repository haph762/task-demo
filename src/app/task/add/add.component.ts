import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  task: Task = {} as Task;
  constructor(private router: Router) {}

  ngOnInit() {}
  submit() {
    this.task.status = '0';
    let taskList = JSON.parse(localStorage.getItem('task'));
    if (!taskList) taskList = [];
    taskList.push(this.task);
    localStorage.setItem('task', JSON.stringify(taskList));
    this.router.navigate(['/task']);
  }
}
