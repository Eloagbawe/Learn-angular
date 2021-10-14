import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import {Post} from '../post';
import { Observable } from 'rxjs';
import { CourseItem } from '../store/models/courseItem.model';
import { State } from '../store/models/state.model';
//import 'rxjs/add/operator/map';
import {of} from 'rxjs';
import {map, catchError, retry} from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

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

    this.newPost = this.http.post<Post>(this.ROOT_URL + '/posts', data)
    
    // .pipe(map((post: { title: any; }) => post.title))

    //this.newPost = this.http.post(this.ROOT_URL + '/foo', data)
    .pipe(retry(3),
    catchError(err => {
      console.log(err)
      throw err
    }))
  }

  test = false

  messages = [
    {
      heading : 'First Heading',
      message : 'This is the first heading'
    },

    {
      heading : 'Second Heading',
      message : 'This is the second heading'
    },

    {
      heading : 'Third Heading',
      message : 'This is the third heading'
    },

    {
      heading : 'Fourth Heading',
      message : 'This is the fourth heading'
    }
  ]

//   checkValue(event){
//     console.log(event.target.checked)
//  }

  ngOnInit(): void {
    
  }

 
}


  //constructor() { }

 

//   export class AppComponent implements OnInit {
//       courseItems$: Observable<Array<CourseItem>>;
//       constructor(private store: Store<State>) {}
//       ngOnInit(): void {
//         this.courseItems$ = this.store.select((store) => store.course);
//       }
//     }
    
// }
