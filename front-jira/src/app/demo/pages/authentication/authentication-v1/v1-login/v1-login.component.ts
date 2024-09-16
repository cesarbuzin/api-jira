// Angular import
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RouterModule } from '@angular/router';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from 'src/app/theme/shared/service/authentication.service';

@Component({
  selector: 'app-v1-login',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './v1-login.component.html',
  styleUrls: ['./v1-login.component.scss']
})
export default class V1LoginComponent implements OnInit {
  // public method
  usernameValue = 'info@codedthemes.com';
  userPassword = '123456';

  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  classList!: { toggle: (arg0: string) => void };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.userValue) {
      this.router.navigate(['/guest/guestV1/guestV1-login']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword?.addEventListener('click', () => {
      // toggle the type attribute
      const type = password?.getAttribute('type') === 'password' ? 'text' : 'password';
      password?.setAttribute('type', type);

      // toggle the icon
      this.classList.toggle('ti-eye-off');
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.error = '';
    this.loading = true;
    this.authenticationService
      .login(this.f?.['email']?.value, this.f?.['password']?.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/default']);
        },
        error: (error) => {
          this.error = error;
          this.loading = false;
        }
      });
  }
}
