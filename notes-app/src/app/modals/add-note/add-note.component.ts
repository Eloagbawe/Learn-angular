import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router'


import { Note } from '../../Note'
import {  NoteService } from '../../services/note.service'

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  @Output() AddNote : EventEmitter<Note> = new EventEmitter

  title: string = '';
  note: string = '';

  @ViewChild('addCheck')
  addCheck!: ElementRef;



  constructor(private noteService : NoteService) { }

  ngOnInit(): void {
      this.noteService.getNotes().subscribe()
  }

  addNote(){
     if(!this.note){
      alert("please add a valid note!")
      return;
     }
     if(!this.title){
      alert("please add a valid title!")
      return;
     }

    const newNote : Note = {
      title: this.title,
      note: this.note,
      important: this.addCheck.nativeElement.checked
    }
   
    this.AddNote.emit(newNote)
    

    this.title = ""
    this.note = ""
    this.addCheck.nativeElement.checked = false
    
  }

}
