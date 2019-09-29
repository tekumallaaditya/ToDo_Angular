import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';

import {Routes, RouterModule} from '@angular/router';


const routes:Routes = [
  {'path': 'todofeed', component: TodoComponent}
]


@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoModule { }
