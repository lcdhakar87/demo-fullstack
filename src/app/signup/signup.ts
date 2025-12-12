import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Auth } from '../services/auth';
@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private auth: Auth) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.auth.registerUser(this.signupForm.value).subscribe({
        next: (response) => {
          console.log(response);
          alert("Signup successful!");
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err.error.message);
          alert("Registration Failed! "+err.error.message);
        }
      });
    }
  }
}
