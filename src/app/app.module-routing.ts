import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    data: { title: 'User List' },
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'task',
    data: { title: 'Task List' },
    loadChildren: () => import('./task/task.module').then(m => m.TaskModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
