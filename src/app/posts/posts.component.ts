import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  getPosts(): void {
    this.postService.getPosts().subscribe(data => this.posts = data);
  }

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }


}
