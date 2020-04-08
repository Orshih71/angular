import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-asgnmt1',
  templateUrl: './asgnmt1.component.html',
  styleUrls: ['./asgnmt1.component.css']
})
export class Asgnmt1Component implements OnInit {
  username;
  constructor() {
  }

  ngOnInit(): void {
  }

  login() {
    this.username = '';
  }
}
