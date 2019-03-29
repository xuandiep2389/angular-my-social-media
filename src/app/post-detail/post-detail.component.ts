import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost(): void {

    const id = +this.route.snapshot.paramMap.get('id');

    this.postService.getPost(id)
      .subscribe(data => this.post = data)
  }
}
