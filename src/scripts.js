import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class Stopwatch extends Component {
    constructor() {

        super();
        this.state = {
            status: false,
            runningTime: [{
                  minutes: 0,
                  seconds: 0,
                  miliseconds: 0
                }]
          }
    }

    reset = (e) => {
      this.setState({
        runningTime: [{
          minutes: 0,
          seconds: 0,
          miliseconds: 0
        }]
      });
      this.setState({
        status: false
      });
      this.checkTarget(e);
    };

    add = () =>  {
          document.querySelector('.results').innerHTML += '<li class="stopwatch">'+document.querySelector('.stopwatch').innerHTML+'</li>';
      }
    format = () =>  {
          return <Format times={this.state.runningTime} />;
    }
    start = (e) => {
      if (this.state.status) return;
      this.myTimer = setInterval(this.calculate, 10);
      this.checkTarget(e);
      this.setState({
        status: true
      });
    };


    calculate = () =>  {
      const currentRunningTime = this.state.runningTime;

          currentRunningTime[0].miliseconds++;
          if (currentRunningTime[0].miliseconds >= 100) {
              currentRunningTime[0].seconds += 1;
              currentRunningTime[0].miliseconds = 0;
          }
          if (currentRunningTime[0].seconds >= 60) {
              currentRunningTime[0].minutes += 1;
              currentRunningTime[0].seconds = 0;
          }
          this.setState({
              runningTime: currentRunningTime
              });
      }

    stop = (e) => {
        clearInterval(this.myTimer)
        this.setState({
          status: false
        });
        this.checkTarget(e);
    };

    checkTarget = (e) => {
        document.querySelector('.active') ? (document.querySelector('.active').classList.remove('active'),e.target.classList.add('active')) : e.target.classList.add('active')
    }

      render = () =>
      	{
      		return (<div className={'main'}>
                    <nav className={'controls'}>
                      <button className={'button'} onClick={this.start}>Start</button>
                      <button className={'button'} onClick={this.stop}>Stop</button>
                      <button className={'button'} onClick={this.reset}>Reset</button>
                      <button className={'button'} onClick={this.add}>Add time to table</button>
                    </nav>
                      <div className={'background'}></div>
                      <div className={"stopwatch"}><Format times={this.state.runningTime} /></div>
                      <div className={"table"}>
                        <h3>Your Time Table:</h3>
                        <ul className={"results"}></ul>
                    </div>
                </div>)
      	}

}

const Format = ({ times }) => <div style={{display: 'flex'}}>{times.map((time, i) => <div style={{display: 'flex'}} key={i}><div className={"stopwatch-col"}><p className={"stopwatch-hours stopwatch-timer"}>{pad0(time.minutes)}</p><p className={"stopwatch-label"}>Minutes</p></div>
                            <div className={"sepa"}>:</div><div className={"stopwatch-col"}><p className={"stopwatch-minutes stopwatch-timer"}>{pad0(time.seconds)}</p><p className={"stopwatch-label"}>Seconds</p></div>
                            <div className={"sepa"}>:</div><div className={"stopwatch-col"}><p className={"stopwatch-seconds stopwatch-timer"}>{pad0(Math.floor(time.miliseconds))}</p><p className={"stopwatch-label"}>Miliseconds</p></div></div>)}</div>;


function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

ReactDOM.render(<Stopwatch />, document.getElementById('app'));


//const stopwatch = new Stopwatch(document.querySelector('.stopwatch'));
