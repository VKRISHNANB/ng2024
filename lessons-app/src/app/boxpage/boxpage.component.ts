import { Component, OnInit } from '@angular/core';
import {BoxaComponent} from '../boxa/boxa.component'

@Component({
  selector: 'app-boxpage',
  standalone: true,
  imports: [BoxaComponent],
  templateUrl: './boxpage.component.html',
  styleUrls: ['./boxpage.component.css']
})
export class BoxpageComponent implements OnInit {
  location = 'Enter City Here';
  data: any='' ;
  constructor() { }

  ngOnInit(): void {
  }
  onBoxValueChange(paramData: any)
  {
    this.data =paramData;
    console.log("From BOX - B : "+this.location +' ' +this.data.value );
  }
}
