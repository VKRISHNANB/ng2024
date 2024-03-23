import { Component, OnInit } from '@angular/core';
import {BooksApiService} from '../books-api.service'
@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
  // providers: [BooksApiService]
})
export class BookformComponent implements OnInit {
  bookList : Array<any> =[ ];
  title = 'Financial Books';
  currentTab = 1;
  constructor(private bookSvc: BooksApiService) { }

  ngOnInit(): void {
  }
  loadData() {
    const self = this;
    this.bookSvc.getBooks()
    .subscribe( (data: any) => this.bookList =data);
  }
  isTabSelected(tabIndex:any ) {
    return this.currentTab === tabIndex;
  };
  onTabChange(event:any, tabIndex:any) {
    event.preventDefault();
    event.stopPropagation();
    this.currentTab = tabIndex;
  };
  onbuy(book:any) {
    console.log('Book added to the Cart...' + book.name +' '+ book.price);
  }
}
