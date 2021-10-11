import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, catchError, retry} from 'rxjs/operators';
import { Note } from '../note'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  private apiUrl = 'http://localhost:3000/notes';

  notes: any = [];

  constructor(private http: HttpClient) { }

  getNotes(){
    //let headers = new HttpHeaders().set('Authorization', 'auth-token');
    return this.http.get(this.apiUrl)
  }

  // showNotes(){
  //   return this.getNotes().subscribe((notes) => (console.log(notes)))
  // }

  
  ngOnInit(): void {
    this.getNotes().subscribe((notes) => (this.notes = notes))
    //this.getNotes().subscribe((notes) => (console.log(notes)))
  }

}
