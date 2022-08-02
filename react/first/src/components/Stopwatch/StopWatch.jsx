import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
      super(props);   
      this.state = {
         time: 0,
      };
      this.timerId = null;
    }
    next = () => {
        this.setState({time: this.state.time + 1});
    }
    stop = () => {
        clearInterval(this.timerId);
        this.timerId = null;
    }
    start = () => {
        if(!this.timerId){
            this.timerId = setInterval(this.next, 1000);
        }
    }
    reset = () => {
        this.setState({time: 0});
    }
    componentDidMount(){
        this.start();
    }
    componentWillUnmount(){
        this.stop();
    }
    return ();
}