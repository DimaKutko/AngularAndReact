import React from "react";
import "./../App.css";
import Creator from "./Creater";

export default class Car extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: false,
      isShowCreator: false,
    };
  }

  showDiscription = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  showCreator = () => {
    this.setState({ isShowCreator: !this.state.isShowCreator });
  };

  render() {
    const {
      car: { name, discription, price, img, creator },
    } = this.props;
    return (
      <>
        <img src={img} alt={name} className="myImg" />
        <p>Name: {name}</p>
        <p>Price: {price}</p>
        <button type="button" onClick={this.showDiscription}>
          {this.state.isShow === true ? <p>Hide</p> : <p>Show</p>}
        </button>
        {this.state.isShow === true ? <p>{discription}</p> : null}
        <button type="button" onClick={this.showCreator}>
          {this.state.isShowCreator ? <p>Hide creator</p> : <p>Show creator</p>}
        </button>
        {this.state.isShowCreator ? (
          <p>
            {" "}
            <Creator creator={creator} />
          </p>
        ) : null}
      </>
    );
  }
}
