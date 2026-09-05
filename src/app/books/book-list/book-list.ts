import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BookApi } from '../book-api';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookList implements OnInit {
  books: Book[] = [];

  constructor(private bookApi: BookApi) {}

  ngOnInit(): void {
    this.bookApi.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  deleteBook(id: number): void {
    this.bookApi.deleteBook(id).subscribe(() => {
      this.books = this.books.filter((b) => b.id !== id);
    });
  }
}
