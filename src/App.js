import React, { Component } from "react";
import Emoji from "./components/Emojis";
import Foods from "./components/Foods";
import emojipedia from "./emojipedia";
import foods from "./foods";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";

function createEmoji(emojiTerm) {
  return (
    <Emoji
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function createFoodEmoji(foodEmoji) {
  return (
    <Foods
      key={foodEmoji.id}
      emoji={foodEmoji.emoji}
      name={foodEmoji.name}
      description={foodEmoji.meaning}
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
          <div>
            <Route path="/foods" component={Foods}>
              <NavLink href="foods">Foods</NavLink>
            </Route>
          </div>
        </h1>

        <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
        <dl className="dictionary">{foods.map(createFoodEmoji)}</dl>

        <footer>
          <p>Copyright © {currentYear}</p>
          <p>Bobstyle_023 Soft Production</p>
        </footer>
      </div>
    );
  }
}

export default App;
