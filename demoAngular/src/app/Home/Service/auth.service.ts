import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../Model/user.model';
import { map, Observable } from 'rxjs';
import { Authresponse } from '../Model/authresponse';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:3000/user";

  constructor(
    private httpClient: HttpClient
  ) { }

  registration(user: UserModel): Observable<Authresponse> {
    return this.httpClient.post<UserModel>(this.baseUrl, user).pipe(
      map((newUser: UserModel) => {
        const token = btoa(`${newUser.email}${newUser.password}`);
        return { token, user: newUser } as Authresponse;
      })
    )
  }

  login(credentials: { email: string; password: string }): Observable<Authresponse> {
    let params = new HttpParams();
    params = params.append('email', credentials.email);
    params = params.append('password', credentials.password);

    return this.httpClient.get<UserModel[]>(`${this.baseUrl}`, { params }).pipe(
      map(users => {
        if (users.length > 0) {
          const user = users[0];
          const token = btoa(`${user.email}:${user.password}`);
          return { token, user } as Authresponse;
        }
        else {
          throw new Error('Invalid Credentials');
        }
      })
    )
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  

}
