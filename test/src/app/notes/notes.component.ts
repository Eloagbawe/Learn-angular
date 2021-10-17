import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, catchError, retry} from 'rxjs/operators';
import { Note } from '../note'
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  private apiUrl = 'http://localhost:3000/notes';

  notes: any = [];

  constructor(private http: HttpClient, private router : Router) { }

  getNotes(){
    //let headers = new HttpHeaders().set('Authorization', 'auth-token');
    return this.http.get(this.apiUrl)
  }

  delete(note : Note){
    return this.http.delete(`${this.apiUrl}/${note.id}`)
  }

  edit(note : Note){
    return this.http.put(`${this.apiUrl}/${note.id}`, note )
  }

  editNote(note : Note){
    this.edit(note).subscribe()
  }
  deleteNote(note : Note){
    this.delete(note).subscribe(() => {
      this.notes = this.notes.filter((n: Note) => n.id !== note.id)

      
      alert("Note Successfully Deleted!")
      this.router.navigate(["/notes"])
      
    }
    )
  }

  
  ngOnInit(): void {
    this.getNotes().subscribe((notes) => (this.notes = notes))
    //this.getNotes().subscribe((notes) => (console.log(notes)))
  }

}
function note(note: any) {
  throw new Error('Function not implemented.');
}

