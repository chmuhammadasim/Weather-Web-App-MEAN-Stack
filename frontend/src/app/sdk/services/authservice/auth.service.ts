import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public async saveTokenToStorage(token: string) {
    return localStorage.setItem('token', token);
  }
  public async getTokenFromStorage() {
    return localStorage.getItem('token');
  }
  public async removeTokenFromStorage() {
    return localStorage.removeItem('token');
  }

  public async saveTokenExpiresIn(expiresIn: string) {
    return localStorage.setItem('expiresIn', expiresIn);
  }
  public async getTokenExpiresIn() {
    return localStorage.getItem('expiresIn');
  }
  public async removeTokenExpiresIn() {
    return localStorage.removeItem('expiresIn');
  }
}
