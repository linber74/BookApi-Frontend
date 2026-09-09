import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Quote } from "./quote";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuoteApi {
  private baseUrl = `${environment.apiUrl}/quotes`;

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.baseUrl);
  }

  getQuote(id: number): Observable<Quote> {
    return this.http.get<Quote>(`${this.baseUrl}/${id}`);
  }

  createQuote(quote: Quote): Observable<Quote> {
    return this.http.post<Quote>(this.baseUrl, quote);
  }

  updateQuote(id: number, quote: Quote): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, quote);
  }

  deleteQuote(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}