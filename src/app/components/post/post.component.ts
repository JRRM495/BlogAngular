import { Component, OnInit } from '@angular/core';
import {PostService} from 'src/app/services/post.service';
import {Observable} from 'rxjs';
import {PostObject} from 'src/app/components/add-post/post-object'
import {Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: PostObject;
  link: Number;
  constructor(
    private router: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.link = params['id'];
    });

    this.postService.getPost(this.link).subscribe((data:PostObject) => {
      this.post = data;
    },(err: any) => {
      console.log('Post Error');
    })
  }

  }


