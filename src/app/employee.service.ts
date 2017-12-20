import { Injectable } from '@angular/core';
import { Employee } from './employee';
// import { EMPLOYEES } from './mock-employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private employeesUrl = '/api/users';



/*   getEmployees(): Employee[] {
    return EMPLOYEES;
  } */

  getEmployees (): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        tap(employees => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  private log(message: string) {
    console.log( message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}