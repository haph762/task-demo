import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskRoutingModule } from './task.module-routing';
import { TaskComponent } from './task.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [TaskComponent, AddComponent, EditComponent],
  imports: [CommonModule, TaskRoutingModule, FormsModule],
  providers: []
})
export class TaskModule {}
