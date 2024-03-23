import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BooksApiService {
  apiUrl="http://localhost:8080/book/getallbooks";
  constructor(private http: HttpClient) { }
  getBooks()
  {
    const books =this.http.get(this.apiUrl);
    console.log(books);
    return books;
  }
}
