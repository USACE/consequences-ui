import React from "react";
import { connect } from "redux-bundler-react";
import Navbar from "../app-components/navbar";
import Map from "../app-components/map-page";

export default () => (
  <>
    <Navbar />
      <div className="row no-gutters">
        <Map/>         
      </div>
  </>
);
