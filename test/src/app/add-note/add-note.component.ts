import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, catchError, retry} from 'rxjs/operators';
import { Note } from '../note'

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  private apiUrl = 'http://localhost:3000/notes';


  // title: string | undefined
  // note: string | undefined

  notes: Observable<any> | undefined;
  newNote: Observable<any> | undefined;
  title!: string;
  note!: string;
  


  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    const data: Note = {
      title: this.title,
      note: this.note
    }

   this.http.post<Note>(this.apiUrl, data, httpOptions)
  
  
  }

  
  
}
