import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule,RouterModule ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
      loginForm: FormGroup;

        constructor(private fb: FormBuilder) {
          this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
          });
        }

        onSubmit() {
          if (this.loginForm.valid) {
            console.log(this.loginForm.value);
            alert("Login Successful!");
          }
        }
}
