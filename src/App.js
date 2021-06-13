import React, { Component } from "react";
import Emoji from "./components/Emojis";
import emojipedia from "./emojipedia";

function createEmoji(emojis) {
  return (
    <Emoji
      key={emojis.id}
      emoji={emojis.emoji}
      name={emojis.name}
      meaning={emojis.meaning}
    />
  );
}

class App extends Component {
  state = {};
  render() {
    let date = new Date();
    let currentYear = date.getFullYear();
    return (
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>

        <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
        <footer>
          <p>Copyright {currentYear}</p>
          <p>Bobstyle_023 Soft Production</p>
        </footer>
      </div>
    );
  }
}

export default App;
