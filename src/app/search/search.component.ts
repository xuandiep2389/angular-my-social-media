import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  posts$: Post[];

  searchText;

  getPosts(): void {
    this.postService.getPosts().subscribe(data => this.posts$ = data);
  }

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.getPosts()
  }



}
