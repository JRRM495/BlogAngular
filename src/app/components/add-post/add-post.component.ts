import { Component, OnInit } from '@angular/core';
import {PostService} from 'src/app/services/post.service';
import {PostObject} from 'src/app/components/add-post/post-object';
import {Router} from '@angular/router';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup;

  constructor(private postService: PostService,
    private router: Router,
    private formBuilder: FormBuilder) { 
      this.addPostForm = this.formBuilder.group({
        title: '',
        body: ''
      })
    }

  ngOnInit(): void {
  }

  addPost() {
    let postObject: PostObject = {
      id: "",
      content: '',
      title: '',
      username: ''
    }
    postObject.content = this.addPostForm.get('body').value;
    postObject.title = this.addPostForm.get('title').value;
    postObject.username = localStorage.getItem("username");
    this.postService.addPost(postObject).subscribe(data => {
      this.router.navigateByUrl('home');
    }, error => {
      console.log('Failure Response');
    })

  }

}
