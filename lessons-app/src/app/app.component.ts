import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InlineComponent} from './inline/inline.component'
// import {AppModule} from './app.module'
import {MyhomeComponent} from './myhome/myhome.component'
import {NewsComponent} from './news/news.component'
import {ColorsComponent} from './colors/colors.component'
import {BooksAComponent} from './books-a/books-a.component'
import {BookListComponent} from './book-list/book-list.component'
import {BoxpageComponent} from './boxpage/boxpage.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InlineComponent,MyhomeComponent,NewsComponent,ColorsComponent,BooksAComponent,BookListComponent,BoxpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lessons-app';
}

