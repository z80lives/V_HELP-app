import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss'],
})
export class MyTestComponent implements OnInit {
  constructor() {}
  
  ngOnInit(): void {
  }
  title = 'this is it';
  students = [
    {
      name: "ali",
      id: 1
    },
    {
      name: "ben",
      id: 2
    },
    {
      name: "kai",
      id: 3
    },
    {
      name: "zack",
      id: 4
    }
  ]
}
