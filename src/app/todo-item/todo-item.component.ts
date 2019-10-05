import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ToDoModel} from '../models/todomodel';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()  todo:ToDoModel;
  @Output() delToDo: EventEmitter<ToDoModel> = new EventEmitter();
  @Output() updateToDo: EventEmitter<ToDoModel> = new EventEmitter();

  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  onDelete(todo){
    console.log('inside the todo-item component');    
    this.delToDo.emit(todo);
    console.log('after the todo-item component'); 
  }

  onUpdate(todo){
    console.log('inside the update in todo-item component');
    this.updateToDo.emit(todo);
    console.log('after the update in todo-item component');
  }

}
