import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  title:string | undefined
  text:string | undefined
  markImportant:boolean | undefined



  constructor() { }

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
