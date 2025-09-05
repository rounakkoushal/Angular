import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      
      const { email, password } = this.loginForm.value;
      
      this.authService.login(email, password).subscribe({
        next: (success) => {
          this.loading = false;
          if (success) {
            this.authService.currentUser$.subscribe(user => {
              if (user?.role === 'admin') {
                this.router.navigate(['/admin-dashboard']);
              } else {
                this.router.navigate(['/dashboard']);
              }
            });
          } else {
            this.errorMessage = 'Invalid email or password';
          }
        },
        error: () => {
          this.loading = false;
          this.errorMessage = 'Login failed. Please try again.';
        }
      });
    }
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}