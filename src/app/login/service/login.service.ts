import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Login} from '../model/login.model';
import {Character} from "../../character/model/character";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: String = 'http://localhost:8080/v1/login';

  constructor(private httpClient: HttpClient) {
  }

  getAuth(login : Login): Observable<Login> {
    return this.httpClient.get<Login>(this.url.concat('/auth?login=' + login.login + '&password=' + login.password))
      .pipe(
        catchError(this.handleError))
  }

  getUser(id: string): Observable<Login> {
    return this.httpClient.get<Login>(this.url.concat('/'+id))
      .pipe(
        catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
