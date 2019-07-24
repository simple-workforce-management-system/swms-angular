import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';


const sessionStorageKey = 'access_token';
const loginAddress = 'swmsapi.azurewebsites.net/users/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private jwtHelperService: JwtHelperService
  ) {
  }

  logIn(username: string, password: string) {
    const jsonObject = {username, password};
    const jsonString = JSON.stringify(jsonObject);
    const response = this.httpClient.post(loginAddress, jsonString);
    response.subscribe((jwt: string) => {
        sessionStorage.setItem(sessionStorageKey, jwt);
        this.router.navigateByUrl('/');
      }
    );
  }


  hasValidToken(): boolean {
    const accessToken = sessionStorage.getItem(sessionStorageKey);
    if (!(!!accessToken)) {
      return false;
    }
    const isExpired = this.jwtHelperService.isTokenExpired(accessToken);
    return !isExpired;
  }


  getToken(): string {
    const accessToken = sessionStorage.getItem(sessionStorageKey);
    return accessToken;
  }
}
