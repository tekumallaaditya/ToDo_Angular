import { Component, OnInit } from '@angular/core';

import {ApiService} from '../api.service';
import {ToDoModel} from '../models/todomodel';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos;

  constructor(private apiSerivice: ApiService, private cookieService: CookieService) { }


  ngOnInit() {

    this.apiSerivice.getToDoFeed().subscribe(
      data => {
        this.todos = data;
        console.log(this.todos[0].id, this.todos[1].id)        
      },
      error => console.log(error)
      
    );

  };

  delToDo(todo){
    console.log('inside the todo component');
    this.apiSerivice.delToDoFeed(todo).subscribe(
      res =>{
        console.log('item deleted')
      },
      error => console.log(error)
    );
    this.todos = this.todos.filter(t => t.id !== todo.id);

  }

  updateToDo(todo){
    console.log('inside the updateToDo of  todo component');
    this.apiSerivice.updateToDoFeed(todo).subscribe();

  }

  AddToDo(todo){
    this.apiSerivice.AddToDo(todo).subscribe(
      todo => {this.todos.push(todo)}
    );
    console.log('inside the AddToDo of  todo component');

  }


}
