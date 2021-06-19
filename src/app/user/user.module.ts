import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.module-routing';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule],
  providers: []
})
export class UserModule {}
