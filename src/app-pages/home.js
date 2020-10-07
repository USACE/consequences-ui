import React from "react";
import { connect } from "redux-bundler-react";
import Navbar from "../app-components/navbar";

const EventList = connect(
  "selectEventItemsArray",
  ({ eventItemsArray: events }) =>
    events &&
    events.length && (
      <div class="list-group">
        {events.map((v, idx) => (
          <span key={idx}
            onClick={() => {
              console.log(`Clicked: ${v.id}`)
            }}
            class="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{v.name}</h5>
                <small>Created<strong className="px-3">{v.create_date}</strong>by user<strong className="px-3">{v.creator}</strong></small>
            </div>
          <small>UUID: {v.id}</small>
          </span>
        ))}
      </div>
    )
);

export default () => (
  <>
    <Navbar />
    <main role="main" className="container">
      <div>
      <h3 className="mb-4">Damage Computes</h3>
        <div className="mt-4 mb-5">
          --- List Here ---
        </div>
        <h3 className="mb-4">Depth Events</h3>
        <div className="mt-4">
          <EventList />
        </div>
      </div>
    </main>
  </>
);
