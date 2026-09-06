import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthApi } from './auth/auth-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('book-app-frontend');

  constructor(
    private authApi: AuthApi,
    private router: Router,
  ) {}

  isLoggedIn(): boolean {
    return this.authApi.isLoggedIn();
  }

  logout(): void {
    this.authApi.logout();
    this.router.navigate(['/login']);
  }
}
