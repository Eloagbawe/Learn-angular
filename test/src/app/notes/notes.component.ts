import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  title: string | undefined;
  note: string | undefined;

  updatedTitle : string | undefined;
  updatedNote : string | undefined;
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  



  @ViewChild('addCheck')
  addCheck!: ElementRef;

  @ViewChild('editCheck')
  editCheck!: ElementRef;

  //ngAfterViewInit() {}

  noteToUpdate: Note = {
    title: '',
    note: '',
    important: false
  }


  constructor(private http: HttpClient, private router : Router) { }


  //Create/Post

  add(){

      const newNote = {
      title: this.title,
      note: this.note,
      important: this.addCheck.nativeElement.checked
    }

     return this.http.post(this.apiUrl, newNote, this.httpOptions)
  }

  addNote(){
    this.add().subscribe((note) => {console.log(note)})

    this.title = ""
    this.note = ""
    this.addCheck.nativeElement.checked = false
    
    this.getNotes()
    
  }




  //Read/Get
  get(){
    //let headers = new HttpHeaders().set('Authorization', 'auth-token');
    return this.http.get(this.apiUrl)
  }

  getNotes(){
    this.get().subscribe((notes) => (this.notes = notes))
  }


  


  //Update

  triggerEdit(note : Note){
    

    this.noteToUpdate = {
      id: note.id,
      title: note.title,
      note: note.note,
      important: note.important
    }
    this.editCheck.nativeElement.checked = note.important
  }




  edit(){

    const updatedNote = {
      id: this.noteToUpdate.id,
      title: this.updatedTitle,
      note: this.updatedNote,
      important: this.editCheck.nativeElement.checked

    }
    return this.http.patch(`${this.apiUrl}/${updatedNote.id}`, updatedNote, this.httpOptions)
  }


  editNote(){
    this.edit().subscribe((note) => {
      console.log(note)
    })
   
    
    this.getNotes()
    
  }



  //Delete
  delete(note : Note){
    return this.http.delete(`${this.apiUrl}/${note.id}`)
  }

  deleteNote(note : Note){
    this.delete(note).subscribe(() => {
      this.notes = this.notes.filter((n: Note) => n.id !== note.id)
    
      
    }
    )
  }

  
  ngOnInit(): void {
    this.getNotes()
    //this.getNotes().subscribe((notes) => (console.log(notes)))
  }

}

