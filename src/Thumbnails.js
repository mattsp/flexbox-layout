import React, { Component } from "react";
import Thumbnail from "./Thumbnail.js";
export default class Thumbnails extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="thumbnails">
        {items.map(item => <Thumbnail src={item.thumbnailUrl} />)}
      </div>
    );
  }
}
