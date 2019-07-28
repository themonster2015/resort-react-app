import React, { Component } from "react";

class Hero extends Component {
  render() {
    return <header className={this.props.hero}>{this.props.children}</header>;
  }
}

export default Hero;
Hero.defaultProps = {
  hero: "defaultHero"
};
