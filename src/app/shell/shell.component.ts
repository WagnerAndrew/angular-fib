import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  input: string = '';
  fib: boolean = false;
  fibNotice: string = '';
  interval: number = 0;
  intervalCount: number = 0;
  numbers: string[] = [];
  printNumbers: string[][] = [];
  step: number = 1;
  inputPlaceholder: string = 'Set an interval in seconds';
  buttonLabel: string = 'Set Interval';

  constructor() {}
  ngOnInit() {}

  ngDoCheck() {
    console.log('Input is ' + this.input);
    console.log('Fib is ' + this.fib);
    console.log('Fib Notice is ' + this.fibNotice);
    console.log('Interval is ' + this.interval);
    console.log('Interval Count is ' + this.intervalCount);
    console.log('Numbers array is ' + this.numbers);
    console.log('Print Numbers array is ' + this.printNumbers);
    console.log('Step is ' + this.step);
    console.log('Input Place holder is ' + this.inputPlaceholder);
    console.log('Button Label is ' + this.buttonLabel);
  }

  //TIMER START///////////////////////////////////
  startTimer() {
    setInterval(() => {
      if (this.intervalCount > 0) {
        this.intervalCount--;
      } else {
        this.printNumberDisplay();
        this.intervalCount = this.interval;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
  //TIMER END//////////////////////////////////////

  //Reset states///////////////////////////////////
  allClear = () => {
    (this.input = ''),
      (this.interval = 0),
      (this.intervalCount = 0),
      (this.numbers = []),
      (this.step = 1),
      (this.printNumbers = []);
  };

  //Input field/////////////////////////////////////
  handleInputChange = e => {
    e.preventDefault();
    const re = /^[0-9\b]+$/;
    // If value is not blank, then test the regex that only allows numbers
    if (e.target.value === '' || re.test(e.target.value)) {
      this.input = e.target.value;
    }
  };

  //Set the user interval////////////////////////////
  userInterval = e => {
    e.preventDefault();

    if (this.input) {
      this.startTimer();

      (this.interval = parseInt(this.input)),
        (this.intervalCount = parseInt(this.input)),
        (this.input = ''),
        (this.step = this.step + 1),
        (this.inputPlaceholder = 'Enter a number'),
        (this.buttonLabel = 'Enter Number');
    }

    console.log('Interval Count is now ' + this.intervalCount);
  };

  //Clears the Fib! notification//////////////////////////
  fibFlash() {
    setTimeout(() => {
      (this.fibNotice = ''), 1000;
    });
  }

  //Checks to see if number is a perfect square////////////
  isSquare = n => {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  };

  //Checks to see if number is in the Fibonacci sequence////
  checkForFib = num => {
    if (
      (this.isSquare(5 * (num * num) - 4) ||
        this.isSquare(5 * (num * num) + 4)) &&
      num < 1000
    ) {
      this.fibNotice = 'Fib!';
      this.fibFlash();
    }
  };

  //Push user entry to number array/////////////////////////
  pushToNumbers = () => {
    if (this.input) {
      this.checkForFib(this.input);

      (this.numbers = [...this.numbers, parseInt(this.input) + ' : ']),
        (this.input = '');
    }
  };

  //Clear input field///////////////////////////////////////
  inputClear = () => {
    this.input = '';
  };

  //Sorts through number array and returns two new arrays with number and frequency then pairs them in new array, then sorts by frequency descending order
  numFreq = arr => {
    var num = [],
      freq = [],
      prev;

    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        num.push(arr[i]);
        freq.push(1);
      } else {
        freq[freq.length - 1]++;
      }
      prev = arr[i];
    }

    var numFreqPair = num.map((a, b) => [a, freq[b]]);

    var numFreqPrint = numFreqPair.sort(function(c, d) {
      return d[1] - c[1];
    });

    return numFreqPrint;
  };

  //Print numbers//////////////////////////////////////////
  printNumberDisplay = () => {
    this.printNumbers = this.numFreq(this.numbers);
  };

  //Goodbye message///////////////////////////////////////
  goodbye = () => {
    this.pauseTimer();

    (this.step = this.step + 1),
      () => {
        setTimeout(() => {
          this.allClear();
        }, 3000);
      };
  };
}
