import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  standalone: true,
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  colorList = ['Red','Blue','Green','Violet','Yellow'];
  constructor() { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

}
