import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: User[] = [];
  user: User = {} as User;
  checkUserExit = 0;
  userEidt: User = {} as User;
  constructor() {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    // this.userList = [
    //   {
    //     id: '1',
    //     name: 'Phu',
    //     email: 'phu@gmail.com'
    //   },
    //   {
    //     id: '2',
    //     name: 'Hieu',
    //     email: 'hieu@gmail.com'
    //   }
    // ];
    this.userList = JSON.parse(localStorage.getItem('dataUser'));
    if (!this.userList) this.userList = [];
  }
  save() {
    if (this.userList.length === 0) {
      this.userList.push(this.user);
      this.checkUserExit = 1;
    } else {
      let userFind = this.userList.find(x => x.id == this.user.id);
      if (userFind != null || userFind !== undefined) {
        this.checkUserExit = 0;
        alert('User da ton tai!');
      } else {
        this.checkUserExit = 2;
        this.userList.push(this.user);
      }
    }
    localStorage.setItem('dataUser', JSON.stringify(this.userList));
  }
  delete(i: number) {
    this.userList.splice(i, 1);
  }
  edit(item: User, i: number) {
    this.userEidt = item;
    // this.userList.findIndex(x=>x.i)
    this.userList[i] = this.userEidt;
  }
  saveEdit() {
    localStorage.setItem('dataUser', JSON.stringify(this.userList));
  }
  add() {
    this.user = {
      id: '',
      name: '',
      email: ''
    };
  }
}
