import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  readonly ROOT_URL = 'http://localhost:3000/notes';

  title:string | undefined
  text:string | undefined
  markImportant:boolean | undefined



  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){

    const newNote = {
      title: this.title,
      text: this.text,
      markImportant: this.markImportant
    }
   console.log(newNote)

  }
  
}
