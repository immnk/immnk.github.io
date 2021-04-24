import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

import css from './AboutMe.css';

const AboutMe = ({ className }) => {
  return (
    <section className={classNames(css.root, className)}>
      <ScrollAnimation animateIn="fadeIn" delay={500} initiallyVisible={false}>
        <div className={css.container}>
          <h3 className={css.header}>Hey, Mani here...! Nice to meet you.</h3>
          {/* eslint no-irregular-whitespace: 0 */}
          <p className={css.description}>
            I am a frontend developer having <strong>​7+</strong> years of experience​ in{' '}
            <code>​JavaScript, ReactJS, angular, HTML5, CSS3​</code>. I have solid experience with
            ​NodeJS, ExpressJS, webpack​. I review code on pull requests raised on a shared monorepo
            built with <code>lerna</code>. I also maintain CICD pipelines for code using Jenkins
            &#38; travis. I also established code quality checks with SonarQube. I have considerable
            REST apis developed for local apps. My github account reflects the same. Please reach it
            at{' '}
            <a target="_blank" href="https://github.com/immnk" rel="noreferrer noopener">
              ​https://github.com/immnk
            </a>
          </p>
        </div>
      </ScrollAnimation>
    </section>
  );
};

AboutMe.defaultProps = {
  className: undefined
};

AboutMe.propTypes = {
  className: PropTypes.string
};

export default AboutMe;
