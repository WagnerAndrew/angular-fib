import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-interval',
  templateUrl: './set-interval.component.html',
  styleUrls: ['./set-interval.component.css']
})
export class SetIntervalComponent implements OnInit {
  buttonLabel: string = 'Set Interval';
  inputPlaceholder: string = 'Enter a time interval (Numbers Only)';

  constructor() {}

  ngOnInit() {}
}
