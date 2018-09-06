import React from "react";
import { render } from "react-dom";
import Thumbnails from "./Thumbnails.js";
import photos from "./photos.json";

import "./styles.scss";

const App = () => (
  <div>
    <Thumbnails items={photos} />
  </div>
);

render(<App />, document.getElementById("app"));
