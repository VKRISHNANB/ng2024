import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-myhome',
  standalone: true,
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css']
})
export class MyhomeComponent implements OnInit {
  @Input()
  title= 'DataPropertyBind';
  location = 'Theni';
  constructor() { }
  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty  
  }
 onBtnClick()
  {
    console.log("Clicked");
  }
  onTextChanged(data: Event)
  {
    this.location = (data.target as HTMLInputElement).value;
    console.log("Text Changed " + this.location);
  }
}
