import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes = [
    {title: "Love",
     text: "Love is a beautiful thing. It is a lovely experience"    
    },
    { title: "List of Songs I like",
    text: "Umbrella by Rihanna, Sinner by Adekunle Gold, Your body by BasketMouth"    
    },

    {title: "Programming Languages",
    text: "Javascript, Python, C sharp"    
   },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
