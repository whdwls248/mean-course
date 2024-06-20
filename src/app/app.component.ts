import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { PostCreateComponent } from "./post/post-create/post-create.component";
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PostCreateComponent, HeaderComponent, FormsModule]
})
export class AppComponent {
  title = 'mean-course';
}
