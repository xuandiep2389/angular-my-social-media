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


  addNewPost(content: string): void {
    if (!content) {return;}

    this.postService.addNewPost({ content } as Post)
      .subscribe(post => {
        this.posts.push(post)
      })
    
  }

  deletePost(post: Post): void {
    this.posts = this.posts.filter(p => p !== post);
    this.postService.deletePost(post).subscribe();
  }
}
