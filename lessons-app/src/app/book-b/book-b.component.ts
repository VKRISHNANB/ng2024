import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-b',
  standalone: true,
  templateUrl: './book-b.component.html',
  styleUrls: ['./book-b.component.css']
})
export class BookBComponent implements OnInit {
  // @Input()
  // book: any;
  @Input()
  book = {
    name: '',
    price: 0 ,
    author: '',
    canBuy: false,
    images: [ {thumb: '', full: ''}],
    description: '',
    publishdate: 0,
    discount: 0
  }
  constructor() { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty  
  }
  onBuy(book:any) {
    console.log('Book added to the Cart...' + book.name +' '+ book.price);
  }
}
