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

  private jwtHelperService: JwtHelperService;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.jwtHelperService = new JwtHelperService();
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


  logOut() {
    sessionStorage.setItem(sessionStorageKey, '');
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
