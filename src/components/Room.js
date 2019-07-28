import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
class Room extends Component {
  render() {
    let { name, slug, images, price } = this.props.room;
    console.log(name);
    return (
      <article className="room">
        <div className="img-container">
          <img src={images[0] || defaultImg} alt="single room" />
          <div className="price-top">
            <h6>${price}</h6>
            <p>per night</p>
          </div>
          <Link to={`/singleroom/${slug}`} className="btn-primary room-link">
            features
          </Link>
        </div>
        <p className="room-info">{name}</p>
      </article>
    );
  }
}

export default Room;
