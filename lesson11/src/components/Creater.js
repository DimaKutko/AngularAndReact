import React from "react";
import "./../App.css";


export default class Creator extends React.Component {
  
  render() {
    const {
      creator: { name, surname },
    } = this.props;
    return ( <>
    <img crc="" alt=""/>
    <p style={{color:  "green"}}>Name: {name}</p>
    <p>Name: {surname}</p>
    </>);
  }
}

Creator.defaultProps = {
  creator: {
    name: "name",
    surname: "surname"
  }   
}