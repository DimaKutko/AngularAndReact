import React from "react";

class Task1 extends React.Component {
  render() {
    const {
      club: { name, img, created, city, part2, part3 },
    } = this.props;

    return (
      <>
        <h1>Task1</h1>
        <Part1 img={img} name={name} created={created} city={city} />
        <ImgWithTitle title="Достижения" img={part2} />
        <ImgWithTitle title="Состав" img={part3} />
      </>
    );
  }
}

export default Task1;

class Part1 extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
        <h1>Клуб: {this.props.name}</h1>
        <p>Город: {this.props.city}</p>
        <p>Основан: {this.props.created}</p>
      </div>
    );
  }
}

class ImgWithTitle extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <img src={this.props.img} />
        </div>
      );
    }
  }