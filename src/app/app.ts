import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthApi } from './auth/auth-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('book-app-frontend');
  theme: string = localStorage.getItem('theme') || 'light';

  constructor(
    private authApi: AuthApi,
    private router: Router,
  ) {}

  ngOnInit(): void {
    document.documentElement.setAttribute('data-bs-theme', this.theme);
  }

  isLoggedIn(): boolean {
    return this.authApi.isLoggedIn();
  }

  logout(): void {
    this.authApi.logout();
    this.router.navigate(['/login']);
  }

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    document.documentElement.setAttribute('data-bs-theme', this.theme);
  }
}
