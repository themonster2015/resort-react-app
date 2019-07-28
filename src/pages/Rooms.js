import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import { RoomContext } from "../context";
import Room from "../components/Room";

class Rooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, rooms } = this.context;
    console.log(rooms);
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
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
        <section className="featured-rooms">
          <h1>Featured Room</h1>

          <section className="roomslist">
            <div className="roomslist-center">
              {loading ? "Loading.." : rooms}
            </div>
          </section>
        </section>
      </>
    );
  }
}

export default Rooms;
