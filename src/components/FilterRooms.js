import React, { Component } from "react";
import { RoomContext } from "../context";

class FilterRooms extends Component {
  static contextType = RoomContext;
  render() {
    const {
      handleChange,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.context;
    let types = [...new Set(this.context.rooms.map(room => room.type))];

    types = ["all", ...types];
    types = types.map((value, index) => (
      <option key={index} value={value}>
        {value}
      </option>
    ));
    let capacities = [
      ...new Set(this.context.rooms.map(room => room.capacity))
    ];
    capacities = capacities.map((value, index) => (
      <option key={index} value={value}>
        {value}
      </option>
    ));
    return (
      <section className="filter-container">
        <h3>search rooms </h3>
        <form className="filter-form">
          {/* select type */}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              onChange={handleChange}
              className="form-control"
              value={type}
            >
              {types}
            </select>
          </div>
          {/* end of select type */}
          {/* guests  */}
          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              name="capacity"
              id="capacity"
              onChange={handleChange}
              className="form-control"
              value={capacity}
            >
              {capacities}
            </select>
          </div>
          {/* end of guests */}
        </form>
      </section>
    );
  }
}

export default FilterRooms;
