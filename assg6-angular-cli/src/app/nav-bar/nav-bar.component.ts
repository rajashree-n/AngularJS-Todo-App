import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    Title: string;
    Author: string;
    ToDo: string;
    show: boolean;
  myName = 'Spurthi Rajashree!';
  names: Array<any>;
  constructor() {
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

  

  addHero(title,author,todo) {
      var td = {
        "Title": title,
        "Author": author,
        "ToDo":  todo
      }
      this.names.push(td);
    
  }


  onClickMe() {
    this.show = !this.show;
  }

  ngOnInit() {
    this.show = !this.show;
  }

}
