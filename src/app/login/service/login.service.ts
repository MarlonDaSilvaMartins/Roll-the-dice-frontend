import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    private api: String = 'http://localhost:8080';  

    public getAuth(login: string, password: string): Observable<Login> {
        const url = `${this.api}/v1/login/auth?login=${login}&password=${password}`
        return this.http.get<Login>(url)
      }
    
}
