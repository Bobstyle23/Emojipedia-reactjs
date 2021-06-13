import React, { Component } from "react";
import emojipedia from "../emojipedia";

class Emoji extends Component {
  state = {};
  render(props) {
    return (
      <div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {this.props.emoji}
            </span>
            <span>{this.props.name}</span>
          </dt>
          <dd>{this.props.meaning}</dd>
        </div>
      </div>
    );
  }
}

export default Emoji;
