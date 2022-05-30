import React from "react";

import pepeMeme from '../assets/img/pepe.svg';

export default class App extends React.Component {
  render() {
    return <div>
      <img src={pepeMeme} alt="pepe meme" />
      <h1>wagmi!</h1>
    </div>;
  }
}
