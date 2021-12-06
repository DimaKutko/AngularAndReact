import React from "react";
import Creator from "./Creator";

export default class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      isShowCreator: true
    };
  }
  showDescription = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  showCreator = () => {
    this.setState({ isShowCreator: !this.state.isShowCreator });
  };

  render() {
    const {
      data: { model, year, img, price, description }
    } = this.props;

    return (
      <>
        <img src={img} alt={model} />
        <p style={{ color: "green", backgroundColor: "black" }}>
          Model {model}
        </p>
        <p>Year {year}</p>
        <p>Цена {price} </p>
        {this.state.isShow === true ? <p>{description}</p> : null}
        <button type="button" onClick={this.showDescription}>
          {this.state.isShow ? "Hide detail" : "Detail"}
        </button>
        <br />
        <br />
        <button type="button" onClick={this.showCreator}>
          {this.state.isShowCreator ? "Hide creator" : "Creator"}
        </button>
        <br />
        <br />
        {this.state.isShowCreator ? <Creator /> : null}
      </>
    );
  }
}
