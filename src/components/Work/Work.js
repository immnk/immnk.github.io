import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

import PranavamImage from './images/pranavam.png';
import CreatusLabImage from './images/creatuslabs.png';
import BotDesignersImage from './images/baashabot.jpeg';
import AryaWatsonImage from './images/aryawatson.jpeg';
import SiriusKartImage from './images/siriuskart.png';
import DefaultImage from './images/project.png';

import css from './Work.css';

const Work = ({ className }) => {
  const works = [
    {
      name: 'Pranavam Natural Life',
      image: PranavamImage,
      url: 'https://pranavamnaturallife.com/'
    },
    { name: 'Creatus labs', image: CreatusLabImage, url: 'https://www.behance.net/manikantamnk' },
    {
      name: 'The Bot Designers',
      image: BotDesignersImage,
      url: 'https://www.facebook.com/thebotdesigners'
    },
    { name: 'Judging App', url: 'https://judgingapp-admin.herokuapp.com/' },
    {
      name: 'Arya Watson',
      image: AryaWatsonImage,
      url: 'https://www.messenger.com/t/121496828551626'
    },
    {
      name: 'Sirius Kart',
      image: SiriusKartImage,
      url: 'https://www.messenger.com/t/296374397500984'
    }
  ];

  const companiesWorked = [
    {
      name: 'DBS Bank',
      image: 'https://www.dbs.com.sg/iwov-resources/flp/images/dbs_logo.svg',
      url: 'https://www.dbs.com.sg/'
    },
    {
      name: 'SGX',
      image: 'https://www.sgx.com/images/7b0d6cda8853ac989d6e8670592a46c6.svg',
      url: 'https://www.sgx.com/'
    },
    {
      name: 'Sirius',
      image: 'https://www.siriuscom.com/wp-content/uploads/2017/01/logoweb17.png',
      url: 'https://www.siriuscom.com/'
    }
  ];

  return (
    <section className={classNames(css.root, className)}>
      <ScrollAnimation animateIn="fadeIn" delay={100} initiallyVisible={false}>
        <div className={css.container}>
          <h3 className={css.header}>Previous Work</h3>
          <p className={css.description}>Here are list of my previous work done.</p>
          <div className={css.workListWrapper}>
            {works.map((work) => {
              return (
                <a
                  className={css.work}
                  href={work.url}
                  rel="noreferrer"
                  target="_blank"
                  key={work.name}
                >
                  <img alt={work.name} src={work.image || DefaultImage} className={css.image} />
                  <h4 className={css.title}>{work.name}</h4>
                </a>
              );
            })}
          </div>
          <div className={css.companiesWorkedWrapper}>
            <h4 className={css.header}>I&apos;m proud to work at these companies</h4>
            <div className={css.companies}>
              {companiesWorked.map((company) => {
                return (
                  <a
                    className={css.company}
                    href={company.url}
                    rel="noreferrer"
                    target="_blank"
                    key={company.name}
                  >
                    <img
                      alt={company.name}
                      src={company.image || DefaultImage}
                      className={css.image}
                    />
                    <h4 className={css.title}>{company.name}</h4>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

Work.defaultProps = {
  className: undefined
};

Work.propTypes = {
  className: PropTypes.string
};

export default Work;
