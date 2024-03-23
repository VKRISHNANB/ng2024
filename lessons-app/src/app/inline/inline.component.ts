import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-html',
  standalone: true,
  template: `<div>In-line HTML</div><h1>Hi...</h1><hr/>`,
  styleUrls: ['./inline.component.css']
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }
}
