import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-boxa',
  standalone: true,
  templateUrl: './boxa.component.html',
  styleUrls: ['./boxa.component.css']
})
/**
 * Creating a reusable component that contains
 *  a label element, and an input element of type="text"
 *  on change of the text value in the input box the change event will be emitted to the outer component
 * To implement the above requirements, we add properties labelValue, and inputData
 * 1. labelValue is used for assigning innerText for the Label from the outer component
 * 2. inputData is used for storing the value assigned to the inputTextBox
 */
export class BoxaComponent implements OnInit {
  @Input()
  labelValue: any;
  @Input()
  inputPlaceholder: any;
  @Input()
  inputValue: any;
  // EventEmmitter to bubble the change event to the outer Component
  @Output()
  onBoxDataChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onchange(event: Event) {
    this.inputValue = (event.target  as HTMLInputElement).value;
    // this.onBoxDataChange.emit({event});
    console.log("From BoxA: "+this.inputPlaceholder +' '+this.inputValue);
    this.onBoxDataChange.emit({value: this.inputValue});
  }
}
