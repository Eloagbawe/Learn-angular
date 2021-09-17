import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {Post} from './post';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import {of} from 'rxjs';
import {map, catchError, retry} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Elo Agbawe Idiodi, Welcome to Angular';
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  //posts: Observable<Post[]> | undefined;

  posts: Observable<any> | undefined;
  newPost: Observable<any> | undefined;

  constructor(private http : HttpClient){}

  getPosts(){
    //this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts');

    //this.posts = this.http.get(this.ROOT_URL + '/posts?id=1');

    //let params = new HttpParams().set('userId', '1');

    let headers = new HttpHeaders().set('Authorization', 'auth-token');

    //this.posts = this.http.get(this.ROOT_URL + '/posts',{params});

    this.posts = this.http.get(this.ROOT_URL + '/posts',{headers});
  }

  createPost(){
    const data: Post = {
      id: null,
      userId: 23,
      title: 'My New Post',
      body: 'Hello World'
    }
    
    //this.newPost = this.http.post(this.ROOT_URL + '/posts', data);

    // this.newPost = this.http.post<Post>(this.ROOT_URL + '/posts', data)
    
    // .pipe(map((post: { title: any; }) => post.title))

    this.newPost = this.http.post(this.ROOT_URL + '/foo', data)
    .pipe(retry(3),
    catchError(err => {
      console.log(err)
      throw err
    }))
  }

  test = false

}