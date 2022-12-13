import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import { IUser } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userUrl = 'https://be-the-qa-api-fake-production.up.railway.app/users'

    constructor(private http: HttpClient){

    }

    getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(this.userUrl).pipe(
            tap(data => console.log ('All: '+ JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getUSerById(id: number): Observable<IUser> {
      return this.http.get<IUser>(`${this.userUrl}/${id}`);

    }

    deleteUser(id:number): Observable<void> {
     return this.http.delete<void>(`${this.userUrl}/${id}`)
   }

   addUser(newUser: IUser): Observable<IUser>{
     return this.http.post<IUser>(`${this.userUrl}`, newUser)
   }

   updateUser(updatedUser: IUser,id: number): Observable<void>{
    return this.http.put<void>(`${this.userUrl}/${id}`, updatedUser)
  }

  updateActive(updatatedActive: any,id: number): Observable<void>{ 
    return this.http.patch<void>(`${this.userUrl}/${id}`, updatatedActive)
  }

    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }

}