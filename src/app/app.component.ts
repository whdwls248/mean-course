import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { PostCreateComponent } from "./post/post-create/post-create.component";
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { Post } from './post/post.model';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PostCreateComponent, HeaderComponent, PostListComponent, FormsModule]
})
export class AppComponent {
  storedPosts: Post [] = [];

  onPostAdded(post: any) {
    this.storedPosts.push(post);
  }
}
