import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Starting at $299/night"
          children="lorem ipsum"
        >
          <Link to="/rooms" className="btn-primary btn">
            Book Now
          </Link>
        </Banner>
      </Hero>
    );
  }
}

export default Home;
