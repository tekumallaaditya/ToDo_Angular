import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import {Routes, RouterModule} from '@angular/router';
import { ApiService } from '../api.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddToDoComponent } from '../add-to-do/add-to-do.component';


const routes:Routes = [
  {path: 'todofeed', component: TodoComponent}
]


@NgModule({
  declarations: [TodoComponent,
    TodoItemComponent,
    AddToDoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [ApiService,CookieService]
})
export class TodoModule {}
