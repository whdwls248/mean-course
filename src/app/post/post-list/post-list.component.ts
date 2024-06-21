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
  posts: Post [] = [];
  private postsSub!: Subscription;

  constructor(public postService: PostService) {
    console.log("list Constructor");
  }

  ngOnInit(): void {
    console.log("list OnInit");
    this.postService.getPosts();
    console.log("list OnInit After getPosts");
    this.postsSub = this.postService.getPostUpdateListner().subscribe((posts: Post[]) => {
      this.posts = posts; 

      console.log("HI", posts);
    });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

}
