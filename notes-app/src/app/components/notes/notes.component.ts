import { Component, OnInit } from '@angular/core';

import {NoteService} from '../../services/note.service'
import {Note} from '../../Note'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: any = []

  noteToUpdate : Note = {
    id: 0,
    title : "",
    note: "",
    important : false
  };

  updateNote(note: Note){
     this.noteToUpdate.id = note.id
     this.noteToUpdate.title = note.title
     this.noteToUpdate.note = note.note
     this.noteToUpdate.important = note.important
  }
  
  


  constructor(private noteService : NoteService) { }

  ngOnInit(): void {
    this.getNotes()
  }

  getNotes(){
    this.noteService.getNotes().subscribe((notes) => this.notes = notes)

  }

  addNote(note: Note){
    this.noteService.addNote(note).subscribe((note) => this.notes.push(note))
    alert("Note Sucessfully added")
  }


  deleteNote(note: Note){
    this.noteService.deleteNote(note).subscribe(() => {
      this.notes = this.notes.filter((n: Note) => n.id !== note.id)
    })
    alert("Note Sucessfully deleted")
  }

  editNote(note:Note){
    this.noteService.editNote(note).subscribe((note) => console.log(note))
    alert("Note Successfully Edited!")
    this.getNotes()
  }
  
}
