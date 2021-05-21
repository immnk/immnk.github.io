import React from 'react';
import { hot } from 'react-hot-loader/root';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';

import AboutMe from 'components/AboutMe';
import Roles from 'components/Roles';
import Work from 'components/Work';
import Recommendations from 'components/Recommendations';

import css from './App.css';

function App({ testMode }) {
  const TRACKING_ID = 'UA-114860474-2';
  ReactGA.initialize(TRACKING_ID, { testMode });

  return (
    <div className={css.root}>
      <div className={css.devImage} />
      <div className={css.container}>
        <h1 className={css.header}>
          Hi, I&apos;m <span className={css.highlight}>Mani 👓</span>
        </h1>
        <p>
          Mobile and Front End Developer | UI UX | Web Developer | Foodie | Tech Enthusiastic |
          Developer #DBS #SGX #Sirius | Proud Indian
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
      <AboutMe />
      <Roles />
      <Work />
      <Recommendations />
    </div>
  );
}

App.defaultProps = {
  testMode: undefined
};

App.propTypes = {
  testMode: PropTypes.bool
};

export default hot(App);
