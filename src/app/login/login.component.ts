import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder
    , private router: Router, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  login() {
    const user = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    if (user === 'admin' && password === 'admin') {
      this.router.navigate(['features']);
    }
    else {
      this.loginForm.reset();
    }
  }

  goBack(): void {
    this.route.navigate(['main']);
  }
}
