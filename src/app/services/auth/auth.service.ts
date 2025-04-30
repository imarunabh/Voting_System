import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { map, Observable, tap } from 'rxjs';

const BASIC_URL = 'http://localhost:8080/';
export const AUTH_HEADER = 'authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(BASIC_URL + 'authenticate', {
      email, password
    }, { observe: 'response' })
      .pipe(
        tap(() => this.log("User Authentication")),
        map((res: HttpResponse<any>) => {
          // Extract token
          const token = res.headers.get(AUTH_HEADER) || '';
          const bearerToken = token.substring(7);  // Removes "Bearer "
          this.storage.saveToken(bearerToken);
          
          // Parse the response body
          const responseBody = res.body;
          if (responseBody && responseBody.user_details) {
            this.storage.saveUser(responseBody.user_details);
          }

          return responseBody;
        })
      );
  }

  log(message: string) {
    console.log(message);
  }
}
