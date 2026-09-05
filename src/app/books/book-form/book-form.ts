import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookApi } from '../book-api';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.scss',
})
export class BookForm implements OnInit {
  form: FormGroup;
  isEditMode = false;
  bookId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private bookApi: BookApi,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publishingDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.isEditMode = true;
      this.bookId = Number(idParam);

      this.bookApi.getBook(this.bookId).subscribe((book) => {
        const formattedDate = book.publishingDate.split('T')[0];
        this.form.patchValue({
          ...book,
          publishingDate: formattedDate,
        });
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    if (this.isEditMode && this.bookId !== null) {
      const updatedBook = { id: this.bookId, ...this.form.value };
      this.bookApi.updateBook(this.bookId, updatedBook).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.bookApi.createBook(this.form.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
