import React, { Component } from "react";
import { RoomContext } from "../context";
import Room from "./Room";
class ListRoom extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, sortedRooms } = this.context;
    console.log("sorted rooms: " + sortedRooms);
    sortedRooms = sortedRooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <h1>Featured Room</h1>

        <section className="roomslist">
          <div className="roomslist-center">
            {loading ? "Loading.." : sortedRooms}
          </div>
        </section>
      </section>
    );
  }
}

export default ListRoom;
