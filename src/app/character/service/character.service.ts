import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Character} from '../model/character';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  url = 'http://localhost:8080/v1/character';

  constructor(private httpClient: HttpClient) {
  }

  getCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  createCharacter(character : Character): Observable<Character> {
    return this.httpClient.post<Character>(this.url, character)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  updateCharacter(character : Character, id: string): Observable<Character> {
    character.id = id;
    return this.httpClient.put<Character>(this.url, character)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  deleteCharacter(id: string) {
    return this.httpClient.delete<Character>(this.url.concat("/"+id))
      .pipe(
        retry(2),
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
