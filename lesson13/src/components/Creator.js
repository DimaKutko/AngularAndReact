import React from "react";

export default class Creator extends React.Component {
  render() {
    return (
      <>
        <img src="" alt="" />
        <p>Name: {this.props.name}</p>
        <p>Surname: {this.props.surname}</p>
      </>
    );
  }
}
Creator.defaultProps = {
  name: "August",
  surname: "Horch",
  img: ""
};
