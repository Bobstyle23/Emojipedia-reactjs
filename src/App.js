import React, { Component } from "react";

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

        <dl className="dictionary">
          <div className="term">
            <dt>
              <span className="emoji" role="img" aria-label="Tense Biceps">
                💪
              </span>
              <span>Tense Biceps</span>
            </dt>
            <dd>
              “You can do that!” or “I feel strong!” Arm with tense biceps. Also
              used in connection with doing sports, e.g. at the gym.
            </dd>
          </div>
          <div className="term">
            <dt>
              <span className="emoji" role="img" aria-label="Tense Biceps">
                🙏
              </span>
              <span>Person With Folded Hands</span>
            </dt>
            <dd>
              Two hands pressed together. Is currently very introverted, saying
              a prayer, or hoping for enlightenment. Is also used as a “high
              five” or to say thank you.
            </dd>
          </div>
          <div className="term">
            <dt>
              <span className="emoji" role="img" aria-label="Tense Biceps">
                🤣
              </span>
              <span>Rolling On The Floor, Laughing</span>
            </dt>
            <dd>
              This is funny! A smiley face, rolling on the floor, laughing. The
              face is laughing boundlessly. The emoji version of “rofl“. Stands
              for „rolling on the floor, laughing“.
            </dd>
          </div>

          <div className="term">
            <dt>
              <span
                className="emoji"
                role="img"
                aria-label="Smiling face with hearts"
              >
                🥰
              </span>
              <span>Smiling face with hearts</span>
            </dt>
            <dd>
              Expresses a range of happy, affectionate feelings, especially
              being in love.
            </dd>
          </div>
        </dl>
        <footer>
          <p>Copyright {currentYear}</p>
          <p>Bobstyle_023 Soft Production</p>
        </footer>
      </div>
    );
  }
}

export default App;
