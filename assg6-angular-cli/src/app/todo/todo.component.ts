import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  Title: string;
  ToDo: string;
  Author: string;
  constructor(Title: string, ToDo: string, Author: string) { 
    this.Title = Title;
    this.ToDo = ToDo;
    this.Author = Author;
  }

  ngOnInit() {
  }

}
