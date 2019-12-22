import React, { Component } from "react";
import axios from "axios";

export class Yeet extends Component {
  componentDidMount() {
    axios
      .get("https://api.epicsevendb.com/api/hero/")
      .then(function(response) {
        console.log(response.data.results);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <img
          src="https://gamepress.gg/epicseven/sites/epicseven/files/Dialogue_Portraits/c5071_su.png"
          alt="seaside"
        />
      </div>
    );
  }
}

export default Yeet;
