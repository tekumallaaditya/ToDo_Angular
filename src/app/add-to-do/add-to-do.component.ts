import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ToDoModel} from '../models/todomodel';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
  item:string = ''

  @Output() AddToDo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const todo = {
      item : this.item,
      status: false
    }

    this.AddToDo.emit(todo);

    console.log('it works')
  }

}
