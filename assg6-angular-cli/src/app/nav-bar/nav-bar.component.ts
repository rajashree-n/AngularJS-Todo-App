import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
// nav bar of todo List
export class NavBarComponent implements OnInit {

    Title: string;
    Author: string;
    ToDo: string;
    show: boolean;
  myName = 'Spurthi Rajashree!';
  names: Array<any>;
  constructor() 
  {
    this.show= true;
    // Default Items in the Array of JSon File
    this.names = [
      {
          "Title": "Lorem Ipsum",
          "Author": "Spurthi Shetty",
          "ToDo": "Read the entire book"
          
      },
      {
          "Title": "Into the Water",
          "Author": "James Walter",
          "ToDo":  "Completed"
      },
      {
          "Title": "The Girl In the train ",
          "Author": "Paula Hawkins",
          "ToDo":  "Next Week"
      }
  ];
  }
 

  
//Add Items in the todo List
  addTodo(title,author,todo) {
      var td = {
        "Title": title,
        "Author": author,
        "ToDo":  todo
      }
      // To push the data in to the Array of to do list
      this.names.push(td);
      this.show= false;
    
  }

 //To hide and Show the form button at the corner 
  onClickMe() {
    this.show = !this.show;
  }

  ngOnInit() {
    this.show = !this.show;
  }

}
