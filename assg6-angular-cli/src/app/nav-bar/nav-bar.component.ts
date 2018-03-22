import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  title = 'Name';
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

  addHero(newHero: string) {
    if (newHero) {
      this.names.push("Title:" + newHero.toString);
    }
  }

  onClickMe() {
    
  }

  ngOnInit() {
  }

}
