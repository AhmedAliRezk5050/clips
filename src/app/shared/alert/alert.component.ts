import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  _bgColor = 'blue'

  @Input() set bgColor(value: string) {
    this._bgColor = `bg-${value}-400`
  }
}
