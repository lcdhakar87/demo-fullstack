import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  
  private apiUrl = 'http://localhost:8080/api/auth';  // Spring Boot Base URL

  constructor(private http: HttpClient) { }
  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  loginUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

}
