import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import { RoomContext } from "../context";
import Room from "../components/Room";
import FilterRooms from "../components/FilterRooms";
import ListRoom from "../components/ListRoom";
class Rooms extends Component {
  render() {
    return (
      <>
        <Hero hero="roomsHero">
          <Banner title="Luxurious Rooms" subtitle="Starting at $299/night">
            <Link to="/" className="btn-primary btn">
              Return Home
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FilterRooms />
        <ListRoom />
      </>
    );
  }
}

export default Rooms;
