import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() inputFormControl = new FormControl();
  @Input() type = 'text'
  @Input() placeholder = ''
   @Input() name = ''

  constructor() { }

  ngOnInit(): void {
  }



}
