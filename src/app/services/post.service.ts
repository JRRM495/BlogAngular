import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PostObject} from 'src/app/components/add-post/post-object';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = environment.url + '/api/posts';
  addposturl ='https://gentle-scrubland-80727.herokuapp.com/api/posts/create';
  constructor(private http: HttpClient) { }

  addPost(postObject: PostObject){
    console.log(this.addposturl);
    return this.http.post(this.addposturl, postObject);
  }

  getAllPosts(): Observable<Array<PostObject>>{
    return this.http.get<Array<PostObject>>(this.url + "/all");
  }

  getPost(id: Number):Observable<PostObject>{ 
    return this.http.get<PostObject>(`${this.url}/get/${id}`);

  }
    
}
