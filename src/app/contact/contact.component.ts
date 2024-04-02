import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private renderer: Renderer2, private route: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    console.log(this.contactForm.value);

    // Handle form submission logic here
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // You can send the form data to your backend or perform other actions
    } else {
      // Mark form controls as touched to trigger validation messages
      this.markFormGroupTouched(this.contactForm);

      // Add a CSS class to invalid form controls to turn them red
      Object.keys(this.contactForm.controls).forEach(field => {
        const control = this.contactForm.get(field);
        if (control && !control.valid) {
          const element = document.getElementById(field);
          if (element) {
            this.renderer.addClass(element, 'is-invalid');
          }
        }
      });
    }
  }

  // Mark all form controls as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  goBack(): void {
    this.route.navigate(['main']);
  }
}
