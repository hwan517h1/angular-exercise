import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() todoToAdd = new EventEmitter();
  newText: string;

  constructor() { }

  ngOnInit() {
  }

  addTodo(newText: string) {
    this.todoToAdd.emit(newText);
    this.newText = "";
  }
}
