import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { TaskComponent } from './task.component';
const routes: Routes = [
  {
    path: '',
    data: { title: 'Task List' },
    component: TaskComponent
  },
  {
    path: 'add',
    data: { title: 'Task Add' },
    component: AddComponent
  },
  {
    path: 'edit',
    data: { title: 'Task Edit' },
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {}
