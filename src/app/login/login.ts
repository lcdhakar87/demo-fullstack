import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule , Router} from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule,RouterModule ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
      loginForm: FormGroup;

        constructor(private fb: FormBuilder, private router: Router, private auth: Auth) {
          this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
          });
        }

        onSubmit() {
          if (this.loginForm.valid) {
               this.auth.loginUser(this.loginForm.value).subscribe({
                next: (response) => {
                  console.log(response); 
                  this.auth.saveToken(response.token);
                  this.router.navigate(['/dashboard']);
                },
                error: (err) => {
                  console.error(err.error.message);
                  alert("Login Failed! "+err.error.message);
                }
              });
          }
        }
}
