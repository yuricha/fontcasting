import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  elements: any = [
    {id: 1, first: 'Alumno', last: 'Api'},
    {id: 2, first: 'Curricula', last: 'Api'},
    {id: 3, first: 'Academico', last: 'Api'},
    {id: 4, first: 'Finance', last: 'APi'}
  ];

  headElements = ['', '', ''];

  constructor() { }

  ngOnInit() {
    console.log("init");
  }

}
