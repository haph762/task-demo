import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  task: Task = {} as Task;
  userId: string;
  uses: User[] = [];
  constructor(private router: Router) {}

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.uses = JSON.parse(localStorage.getItem('dataUser'));
    console.log(this.uses);
    if (!this.uses) this.uses = [];
  }
  submit() {
    this.task.status = '0';
    let taskList = JSON.parse(localStorage.getItem('task'));
    if (!taskList) taskList = [];
    taskList.push(this.task);
    localStorage.setItem('task', JSON.stringify(taskList));
    this.router.navigate(['/task']);
  }
  changeUser() {
    this.task.user_name = this.uses.find(x => x.id == this.task.user_id).name;
  }
}
