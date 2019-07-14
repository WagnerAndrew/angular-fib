import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../process.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  input: string;
  fib: boolean;
  fibNotice: string;
  interval: number;
  intervalCount: number;
  numbers: string[];
  printNumbers: string[][];
  step: number = 1;
  inputPlaceholder: string = 'Test Placeholder';
  buttonLabel: string = 'Test Label';

  constructor(private process: ProcessService) {}

  ngOnInit() {
    this.input = this.process.input;
    this.fib = this.process.fib;
    this.fibNotice = this.process.fibNotice;
    this.interval = this.process.interval;
    this.intervalCount = this.process.intervalCount;
    this.numbers = this.process.numbers;
    this.printNumbers = this.process.printNumbers;
    this.step = this.process.step;
  }
}
