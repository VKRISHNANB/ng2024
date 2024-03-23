import { Component, OnInit } from '@angular/core';
import {BookBComponent} from '../book-b/book-b.component'
import {BookTabComponent} from '../book-tab/book-tab.component'

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports:[BookBComponent,BookTabComponent],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
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
      publishdate: Date.now(),
      discount: 0.1
    },
    {
      name: 'Zero to One',
      price: 320,
      author: 'Peter Thiel',
      canBuy: false,
      images: [ {thumb: 'images/ZeroToOne.png', full: ''}],
      publishdate: Date.now(),
      discount: 0.2,
      description: 'Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by venture capitalist, PayPal co-founder, and early Facebook investor Peter Thiel along with Blake Masters'
    },
    {
      name: 'Ponniyin Selvan',
      price: 470,
      author: 'Kalki Krishnamurthy',
      canBuy: true,
      images: [ {thumb: 'images/PS.jpg', full: ''}],
      publishdate: Date.now(),
      discount: 0.2,
      description: 'Ponniyin Selvan is a 20th-centuryTamil historical novel. Written in five volumes, this narrates the story of Arulmozhivarman (later crowned as Rajaraja Chola I), one of the kings of theChola Dynasty during the 10th and 11th centuries.'
    }
   ];
  constructor() { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty  
  }

}
