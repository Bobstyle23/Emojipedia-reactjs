import React, { Component } from "react";

class Emoji extends Component {
  state = {};
  render(props) {
    return (
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {this.props.emoji}
          </span>
          <span>{this.props.name}</span>
        </dt>
        <dd>{this.props.description}</dd>
      </div>
    );
  }
}

export default Emoji;
