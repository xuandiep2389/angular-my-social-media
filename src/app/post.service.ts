import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from './post';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  //get posts from server
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
  }
}
