import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Post} from './post';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  //get posts from server
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        catchError(this.handleError('get posts', []))
      )
  }






  /**
   * handle Http operation that failed.
   * let the app continue
   * @param operation - name of operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {

      //TODO: send the error to remote logging infrastructure
      console.error(error);

      return of(result as T)
    };
  }

  //POST: add a new post to the server
  addNewPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions)
      .pipe(catchError(this.handleError<Post>('add post')))

  }
}
