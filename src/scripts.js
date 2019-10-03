import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class Stopwatch extends Component {
    constructor(props) {

        super(props);
      	this.state = {
          	running: false
      	};

        this.display = this.props;
        this.step = this.step.bind(this.state);
        this.reset = this.reset.bind(this);
        this.print = this.print.bind(this.props);
        this.add = this.add.bind(this);
        this.format = this.format.bind(this.times);
        this.start = this.start.bind(this.state);
        this.calculate = this.calculate.bind(this);
        this.stop = this.stop.bind(this.state);

        this.reset();
        this.print();
    }

    handleOnClick = (e) => {
      this.setState( {running: true} );
    }

    handleOnClickStop = (e) => {
      this.setState( {running: false} );
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
        if (!this.state) {
            this.handleOnClick;
            this.watch = setInterval(() => this.step(), 10);
        }
    }
    step() {
        if (!this.state) return;
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
            this.handleOnClickStop;
            clearInterval(this.watch);
      }

	render()
	{
		return (<div className={"stopwatch"}></div>)
	}


}

class Results extends Component {
	render()
	{
		return (<ul className={"results"}></ul>)
	}
}

class HtmlElements extends Component {
	render()
		{
			return (
		    <div className={'content'}>
			<div className={'background'}></div>
			<nav className={'controls'}>
			  <a href="#" className={'button'} id="start">Start</a>
			  <a href="#" className={'button'} id="stop">Stop</a>
			  <a href="#" className={'button'} id="reset">Reset</a>
			  <a href="#" className={'button'} id="add">Add time to table</a>
			</nav>
			<Stopwatch />
			  <div className={"table"}>
			    <h3>Your Time Table:</h3>
			 <Results />
			  </div>
		    </div>);
		}
}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

ReactDOM.render(<HtmlElements />, document.getElementById('app'));


const stopwatch = new Stopwatch(document.querySelector('.stopwatch'));


let startButton = document.getElementById('start');
startButton.addEventListener('click', () => { stopwatch.start();stopButton.classList.remove('active');startButton.classList.add('active'); });

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => { stopwatch.stop();stopButton.classList.add('active');startButton.classList.remove('active'); });

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {stopwatch.reset();stopwatch.stop();stopwatch.print();startButton.classList.remove('active');stopButton.classList.remove('active')});

let addButton = document.getElementById('add');
addButton.addEventListener('click', () => stopwatch.add());
