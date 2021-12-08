import React from "react";
class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    console.log("didMount");
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate() {
    console.log("didUpdate");
  }
  componentWillUnmount() {
    console.log("willUnmount");
    clearInterval(this.timerId);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    console.log("RENDER");
    return (
      <div>
        <h2>{this.state.date.toTimeString()}</h2>
      </div>
    );
  }
}
export default Lifecycle;
