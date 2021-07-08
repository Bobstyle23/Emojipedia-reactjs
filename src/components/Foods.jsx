import React, { Component } from "react";

class Foods extends Component {
  state = {};
  render(props) {
    return (
      <div className="term">
        <h1>Foods Emoji</h1>
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

export default Foods;
