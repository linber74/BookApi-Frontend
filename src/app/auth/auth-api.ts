import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

interface AuthResponse {
  token: string;
}

interface Credentials {
  userName: string;
  passwordHash: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  private baseUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  register(credentials: Credentials): Observable<string> {
    return this.http.post(`${this.baseUrl}/register`, credentials, {
      responseType: 'text',
    });
  }

  login(credentials: Credentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, credentials).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
      }),
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
