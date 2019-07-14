import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  constructor() {}

  input: string = '';
  fib: boolean = false;
  fibNotice: string = '';
  interval: number = 0;
  intervalCount: number = 0;
  numbers: string[] = [];
  printNumbers: string[][] = [];
  step: number = 1;

  //TIMER START///////////////////////////////////////////////////////////////////////////////////////////////////////
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
  //TIMER END////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Reset states/////////////////////////////////////////////////////////////////////////////////////////////////////
  allClear = () => {
    (this.input = ''),
      (this.interval = 0),
      (this.intervalCount = 0),
      (this.numbers = []),
      (this.step = 1),
      (this.printNumbers = []);
    // (this.stopTimer());
  };

  //Input field//////////////////////////////////////////////////////////////////////////////////////////////////////
  handleInputChange = e => {
    e.preventDefault();
    const re = /^[0-9\b]+$/;
    // If value is not blank, then test the regex that only allows numbers
    if (e.target.value === '' || re.test(e.target.value)) {
      this.input = e.target.value;
    }
  };

  //Set the user interval////////////////////////////////////////////////////////////////////////////////////////////
  userInterval = e => {
    e.preventDefault();

    if (this.input) {
      // this.startTimer();

      (this.interval = parseInt(this.input)),
        (this.intervalCount = parseInt(this.input)),
        (this.input = ''),
        (this.step = this.step + 1);
    }
  };

  //Clears the Fib! notification///////////////////////////////////////////////////////////////////////////////////////
  fibFlash() {
    setTimeout(() => {
      (this.fibNotice = ''), 1000;
    });
  }

  //Checks to see if number is a perfect square///////////////////////////////////////////////////////////////////////
  isSquare = n => {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  };

  //Checks to see if number is in the Fibonacci sequence///////////////////////////////////////////////////////////////
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

  //Push user entry to number array/////////////////////////////////////////////////////////////////////////////////////
  pushToNumbers = () => {
    if (this.input) {
      this.checkForFib(this.input);

      (this.numbers = [...this.numbers, parseInt(this.input) + ' : ']),
        (this.input = '');
    }
  };

  //Clear input field///////////////////////////////////////////////////////////////////////////////////////////////////
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

  //Print numbers//////////////////////////////////////////////////////////////////////////////////////////////////////
  printNumberDisplay = () => {
    this.printNumbers = this.numFreq(this.numbers);
  };

  //Goodbye message/////////////////////////////////////////////////////////////////////////////////////////////////////
  goodbye = () => {
    // this.stopTimer();

    (this.step = this.step + 1),
      () => {
        setTimeout(() => {
          this.allClear();
        }, 3000);
      };
  };
}

//TIMER START///////////////////////////////////////////////////////////////////////////////////////////////////////

//   clearInterval(timer);

//   tick() {

//   if (this.intervalCount > 0) {
//      this.intervalCount - 1
//   } else {
//     printNumbers();
//     this.intervalCount = this.interval;
//   }
// }
// startTimer() {
//   clearInterval(timer);
//   timer:number = setInterval(tick(), 1000);
// }
// stopTimer() {
//   clearInterval(timer);
// }
//TIMER END////////////////////////////////////////////////////////////////////////////////////////////////////////
