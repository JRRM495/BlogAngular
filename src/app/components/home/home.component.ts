import { Component, OnInit } from '@angular/core';
import {PostService} from 'src/app/services/post.service';
import {Observable} from 'rxjs';
import {PostObject} from 'src/app/components/add-post/post-object'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Observable<Array<PostObject>>;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts();
  }

}
