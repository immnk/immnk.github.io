import React from 'react';

import css from './App.css';

function App() {
  return (
    <div className={css.root}>
      <div className={css.devImage} />
      <div className={css.container}>
        <h1 className={css.header}>
          Hi, I&apos;m <span className={css.highlight}>Mani 👓</span>
        </h1>
        <p>
          Mobile and Front End Developer | UI UX | Web Designer | Foodie | Tech Enthusiastic |
          Developer #DBS | Proud Indian
        </p>
        <div className={css.iconsSocial}>
          <a target="_blank" href="https://github.com/immnk" rel="noreferrer">
            <i className="fab fa-github" />
          </a>
          <a target="_blank" href="https://twitter.com/manimnk" rel="noreferrer">
            <i className="fab fa-twitter" />
          </a>
          <a target="_blank" href="https://stackoverflow.com/story/manikantamnk" rel="noreferrer">
            <i className="fab fa-stack-overflow" />
          </a>
          <a target="_blank" href="https://dev.to/immnk" rel="noreferrer">
            <i className="fab fa-dev" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/manikantatankala" rel="noreferrer">
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
