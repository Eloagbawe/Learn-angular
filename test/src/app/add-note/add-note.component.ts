import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, catchError, retry} from 'rxjs/operators';
import { Note } from '../note'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  private apiUrl = 'http://localhost:3000/notes';

  title: string | undefined
  note: string | undefined

  notes: Observable<any> | undefined;
  newNote: Observable<any> | undefined;
  

  constructor(private http : HttpClient, private router : Router) { }


  ngOnInit(): void {
  }

  

  addNote(){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    const data = {
      title: this.title,
      note: this.note
    }

   return this.http.post(this.apiUrl, data, httpOptions)
  
  }

  onSubmit(){
     this.addNote().subscribe((note) => {
       console.log(note)
       
       alert("Note Added Successfully!")
       this.router.navigate(["/notes"])
    })
  }

  
  
}
