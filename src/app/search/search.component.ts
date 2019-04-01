import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Post} from '../post';
import {PostService} from '../post.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  posts$: Observable<Post[]>;

  private searchTerms = new Subject<String>();

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.searchTerms.pipe(

      //wait 300 ms after each keystroke  before considering the term
      debounceTime(300),

      //ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term change
      switchMap((term: string) => this.postService.searchPost(term)),
    );
  }

  //push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
}
