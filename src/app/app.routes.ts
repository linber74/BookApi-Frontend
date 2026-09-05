import { Routes } from '@angular/router';
import { BookList } from './books/book-list/book-list';
import { BookForm } from './books/book-form/book-form';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';

export const routes: Routes = [
  { path: '', component: BookList },
  { path: 'books/new', component: BookForm },
  { path: 'books/:id', component: BookForm },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
];
