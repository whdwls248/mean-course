import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})

export class PostListComponent implements OnInit, OnDestroy {
  @Input()
  posts: Post [] = [];
  private postsSub: Subscription = new Subscription;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListner().subscribe((posts: Post[]) => {
      this.posts = posts; 
    });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }
}
