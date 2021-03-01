import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-component',
  templateUrl: './school-component.component.html',
  styleUrls: ['./school-component.component.css']
})
export class SchoolComponentComponent implements OnInit {

  // testUsers = ['deon', 'funk', 'damola', 'kayode']

  usersList = [
    {
      id:'1',
      name: 'deon',
      count:200
    },
    {
      id: '2',
      name: 'funk',
      count:250
    },
    {
      id: '3',
      name: 'damola',
      count: 300
    }
  ];


  removeUser(id: string): void {
    this.usersList = this.usersList.filter(user => user.id !== id);

    console.log('removeUser, id')



  }

  constructor() { }

  ngOnInit(): void {
  }



}
