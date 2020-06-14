import React, { Component } from "react";
import "./App.css";
import Season from "./Season";
import Loader from "./Loader";
import Error from "./Error";

class App extends Component {
  state = {
    lat: null,
    err: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ err: err.message })
    );
  }

  render() {
    if (!this.state.err && this.state.lat) {
      return <Season lat={this.state.lat} />;
    } else if (!this.state.lat && this.state.err) {
      return <Error />;
    }
    return <Loader text="Accept Location Prompt and Continue.." />;
  }
}

export default App;
