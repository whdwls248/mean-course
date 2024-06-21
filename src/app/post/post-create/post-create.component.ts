import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Post } from '../post.model';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatCardModule, MatButtonModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(private postService: PostService) {}

  onAddPost(form: NgForm) {
    if(form.invalid) {
      return;
    }

    const post : Post = {
      id: '',
      title: form.value.title,
      content: form.value.content
    };

    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
