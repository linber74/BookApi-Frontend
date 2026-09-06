import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { QuoteApi } from "../quote-api";
import { Quote } from '../quote';

@Component({
    selector: 'app-quote-list',
    imports: [CommonModule, RouterLink],
    templateUrl: './quote-list.html',
    styleUrl: './quote-list.scss'
})
export class QuoteList implements OnInit {
    quotes: Quote[] = [];

    constructor(private quoteApi: QuoteApi) { }
    
    ngOnInit(): void {
        this.quoteApi.getQuotes()
            .subscribe((data) => {
                this.quotes = data;
            });
    }

    deleteQuote(id: number): void {
        this.quoteApi.deleteQuote(id).subscribe(() => {
            this.quotes = this.quotes.filter((q) => q.id != id);
        })
    }
}