import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <h1>{this.props.title}</h1>
        <div />
        <p>{this.props.subtitle}</p>
        {this.props.children}
      </div>
    );
  }
}

export default Banner;
