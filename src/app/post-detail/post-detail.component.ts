import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../post.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public edit = false;

  @Input() post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPost(), console.warn(this.edit)
  }

  getPost(): void {

    const id = +this.route.snapshot.paramMap.get('id');

    this.postService.getPost(id)
      .subscribe(data => this.post = data)
  }

  goBack(): void {
    this.location.back();
  }


  toggleEdit() {
    this.edit = true;
  }

  savePost(): void {
    this.postService.updatePost(this.post)
      .subscribe(() => this.goBack());

    console.warn(this.edit)
  }
}
