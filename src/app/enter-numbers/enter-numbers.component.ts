import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-numbers',
  templateUrl: './enter-numbers.component.html',
  styleUrls: ['./enter-numbers.component.css']
})
export class EnterNumbersComponent implements OnInit {
  buttonLabel: string = 'Enter Number';
  inputPlaceholder: string = 'Enter a number';

  constructor() {}

  ngOnInit() {}
}
