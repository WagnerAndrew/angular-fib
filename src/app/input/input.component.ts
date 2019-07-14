import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() sharedVar: string;
  @Input() inputPlaceholder: string;
  @Output() sharedVarChange = new EventEmitter();
  change(newValue) {
    console.log('newvalue', newValue);
    this.sharedVar = newValue;
    this.sharedVarChange.emit(newValue);
  }

  constructor() {}

  ngOnInit() {}
}
