import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit, AfterContentInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

import { Note } from '../../Note'
@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit , AfterViewInit {

   @Input() noteToUpdate: Note = {
     title: "",
     note: "",
     id:0,
     important: false
   };

 

   @Output() EditNote : EventEmitter<Note> = new EventEmitter

  
  updatedTitle!: string;
  updatedNote!: string;

  @ViewChild('editCheck')
  editCheck!: ElementRef;


  constructor(private noteService: NoteService) {}
  

  ngAfterViewInit(): void {
    
    this.editCheck.nativeElement.checked = this.noteToUpdate.important;
  }

  ngOnInit(): void { }

  editNote(){
  
     const updatedNote = {
       id: this.noteToUpdate.id,
       title : this.updatedTitle,
       note: this.updatedNote,
       important: this.editCheck.nativeElement.checked

     }

     this.EditNote.emit(updatedNote)

     this.editCheck.nativeElement.checked = false;
    //  console.log(updatedNote)
  }
}
