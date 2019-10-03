class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }

    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
          };
    }
    print() {
        this.display.innerHTML = this.format(this.times);
      }
    add() {
          document.querySelector('.results').innerHTML += '<li class="stopwatch">'+this.format(this.times)+'</li>';
      }
    format(times) {
          return `<div class="stopwatch-col"><p class="stopwatch-hours stopwatch-timer">${pad0(times.minutes)}</p><p class="stopwatch-label">Minutes</p></div>
          <div class="sepa">:</div><div class="stopwatch-col"><p class="stopwatch-minutes stopwatch-timer">${pad0(times.seconds)}</p><p class="stopwatch-label">Seconds</p></div>
          <div class="sepa">:</div><div class="stopwatch-col"><p class="stopwatch-seconds stopwatch-timer">${pad0(Math.floor(times.miliseconds))}</p><p class="stopwatch-label">Miliseconds</p></div>`;
    }
    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }
    step() {
        if (!this.running) return;
          this.calculate();
          this.print();
    }

    calculate() {
          this.times.miliseconds += 1;
          if (this.times.miliseconds >= 100) {
              this.times.seconds += 1;
              this.times.miliseconds = 0;
          }
          if (this.times.seconds >= 60) {
              this.times.minutes += 1;
              this.times.seconds = 0;
          }
      }

      stop() {
            this.running = false;
            clearInterval(this.watch);
      }
}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

const stopwatch = new Stopwatch(
document.querySelector('.stopwatch'));


let startButton = document.getElementById('start');

startButton.addEventListener('click', () => { stopwatch.start();stopButton.classList.remove('active');startButton.classList.add('active'); });

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => { stopwatch.stop();stopButton.classList.add('active');startButton.classList.remove('active'); });

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {stopwatch.reset();stopwatch.stop();stopwatch.print();startButton.classList.remove('active');stopButton.classList.remove('active')});

let addButton = document.getElementById('add');
addButton.addEventListener('click', () => stopwatch.add());
