import { Component , OnInit} from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { QuoteApi } from "../quote-api";
import { ActivatedRoute ,Router} from "@angular/router";

@Component({
    selector: 'app-quote-form',
    imports: [ReactiveFormsModule],
    templateUrl: './quote-form.html',
    styleUrl: './quote-form.scss',
})
export class QuoteForm implements OnInit {
    form: FormGroup;
    isEditMode = false;
    quoteId: number | null = null;

    constructor(
        private fb: FormBuilder,
        private quoteApi: QuoteApi,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.form = this.fb.group({
            text: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        const idParam = this.route.snapshot.paramMap.get('id');
       
        if (idParam) {
            this.isEditMode = true;
            this.quoteId = Number(idParam);

            this.quoteApi.getQuote(this.quoteId).subscribe((quote) => {
                this.form.patchValue(quote);
            });
        }
    }

    onSubmit(): void {
        if (this.form.invalid) {
            return;
        }

        if (this.isEditMode && this.quoteId !== null) {
            const updatedQuote = { id: this.quoteId, ...this.form.value };
            this.quoteApi.updateQuote(this.quoteId, updatedQuote).subscribe(() => {
                this.router.navigate(['/quotes'])
            });
        } else {
            this.quoteApi.createQuote(this.form.value).subscribe(() => {
                this.router.navigate(['/quotes'])
            });
        }
    }
}