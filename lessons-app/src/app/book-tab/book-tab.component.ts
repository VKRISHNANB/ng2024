import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-tab',
  standalone: true,
  templateUrl: './book-tab.component.html',
  styleUrls: ['./book-tab.component.css']
})
export class BookTabComponent implements OnInit {
  currentTab = 0;
  @Input()
  book: any;
  @Input()
  idx: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.currentTab = (11 * this.idx);
    console.log('Tab Selected: '+this.currentTab );
  }
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex;
  }
  onTabChange(event: Event, tabIndex: number) {
    event.preventDefault(); // To stop flicker
    this.currentTab = tabIndex;
    console.log('Tab Selected: '+this.currentTab );
  }
}
