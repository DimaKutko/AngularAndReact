import React from "react";

class Lifecycle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
        console.log("didMount")
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentDidUpdate()
    {
        console.log('UpdateMount')
    }
  
    componentWillUnmount() {
        console.log('Will Unmount')
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
        console.log('render')
      return (
        <div>
          <h1>Привет, мир!</h1>
          <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  export default Lifecycle;