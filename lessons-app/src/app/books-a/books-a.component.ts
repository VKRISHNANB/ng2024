import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-books-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books-a.component.html',
  styleUrls: ['./books-a.component.css']
})
export class BooksAComponent implements OnInit {
  currentTab = 'b0t1';
  bookList =[
    {
      name: 'The Three Zeros',
      price: 270,
      author: 'Muhammed Yunus',
      canBuy: true,
      images: [
        {thumb: 'images/WorldofThreeZeros.png', full: ''}
      ],
      description: 'A winner of the Nobel Peace Prize offers his vision of an emerging new economic system that can save humankind and the planet Muhammad Yunus, who created microcredit, invented social business and earned ..',
      publishDate: Date.now(),
      discount: 0.1
    },
    {
      name: 'Zero to One',
      price: 320,
      author: 'Peter Thiel',
      canBuy: false,
      images: [ {thumb: 'images/ZeroToOne.png', full: ''}],
      publishDate: Date.now(),
      discount: 0.2,
      description: 'Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by venture capitalist, PayPal co-founder, and early Facebook investor Peter Thiel along with Blake Masters'
    },
    {
      name: 'Ponniyin Selvan',
      price: 470,
      author: 'Kalki Krishnamurthy',
      canBuy: true,
      images: [ {thumb: 'images/PS.jpg', full: ''}],
      publishDate: Date.now(),
      discount: 0.2,
      description: 'Ponniyin Selvan is a 20th-centuryTamil historical novel. Written in five volumes, this narrates the story of Arulmozhivarman (later crowned as Rajaraja Chola I), one of the kings of theChola Dynasty during the 10th and 11th centuries.'
    }
   ];
  constructor() { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty  
  }
  onBuy(book:any) {
    console.log('Book added to the Cart...' + book.name +' '+ book.price);
  }
  isTabSelected(tabIndex: string) {
    return this.currentTab === tabIndex;
  }
  onTabChange(event: any, tabIndex: string) {
    event.preventDefault(); // To stop flicker
    this.currentTab = tabIndex;
    console.log('Tab Selected: '+this.currentTab );
  }
}
