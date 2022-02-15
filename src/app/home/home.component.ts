import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string;

  constructor() { }

  ngOnInit(): void {
    const msg = JSON.stringify(localStorage.getItem('message'));
    console.log(msg);
    if (msg !== 'null') {
      this.message = msg;
    }
  }

}
