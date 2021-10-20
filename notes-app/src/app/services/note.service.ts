import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Note } from '../note'

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl = 'http://localhost:3000/notes';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]>{

    return this.http.get<Note[]>(this.apiUrl)

  }

  addNote(note: Note) : Observable<Note[]>{

    return this.http.post<Note[]>(this.apiUrl, note, this.httpOptions)

  }

  editNote(note: Note) : Observable<Note[]>{
    const url = `${this.apiUrl}/${note.id}`;

    return this.http.patch<Note[]>(url, note, this.httpOptions)
  }


  deleteNote(note: Note) : Observable<Note[]>{
    const url = `${this.apiUrl}/${note.id}`;

    return this.http.delete<Note[]>(url)
  }

}
