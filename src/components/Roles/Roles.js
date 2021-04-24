import React from 'react';
import PropTypes from 'proptypes';
import classNames from 'classnames';
import ScrollAnimation from 'react-animate-on-scroll';

// eslint-disable-next-line css-modules/no-unused-class
import css from './Roles.css';

// eslint-disable-next-line max-lines-per-function
const Roles = ({ className }) => {
  const myRoles = [
    {
      id: 'mobile',
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Developer',
      description: `I have developed enterprise hybrid mobile applications for <code>Android</code> and
  <code>iOS</code>. I have also developed some apps for personal use. Do check out
  <a
    href="https://play.google.com/store/apps/details?id=com.creatuslabs.portfolio"
    rel="noreferrer"
  >
    here
  </a>`,
      tools: ['Ionic', 'Cordova', 'Swift', 'Java'],
      domains: ['eCommerce', 'Insurance', 'Gaming']
    },
    {
      id: 'frontend',
      icon: 'fas fa-laptop-code',
      title: 'Front-end Developer',
      description: `I like to build user interfaces for applications that solve problems for real users 
        and turn ideas into reality!`,
      tools: [
        'ReactJS',
        'Vanilla JS',
        'HTML5',
        'CSS3',
        'GitHub',
        'iTerm',
        'VS Code',
        'CSS Modules'
      ],
      domains: ['Banking', 'Insurance', 'Trading']
    },
    {
      id: 'node',
      icon: 'fab fa-node-js',
      title: 'NodeJS Developer',
      description:
        'I write backend code using NodeJS to create a full stack apps that can communicate with mobile or web.',
      tools: ['NodeJS', 'ExpressJS', 'mongoDB', 'MERN'],
      domains: ['eCommerce', 'Insurance']
    }
  ];
  return (
    <section className={classNames(css.root, className)}>
      <div className={css.container}>
        {myRoles.map((role) => {
          return (
            <ScrollAnimation
              animateIn="pulse"
              key={role.id}
              className={classNames(css.subContainer, css[role.id])}
            >
              <figure className={css.icon}>
                <i className={role.icon} />
              </figure>
              <h1 className={css.title}>{role.title}</h1>
              <p
                className={css.description}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: role.description }}
              />
              <p className={css.listTitle}>Tools used</p>
              <ul className={css.list}>
                {role.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <p className={css.listTitle}>Domains Worked</p>
              <ul className={css.list}>
                {role.domains.map((domain) => (
                  <li key={domain}>{domain}</li>
                ))}
              </ul>
            </ScrollAnimation>
          );
        })}
      </div>
    </section>
  );
};

Roles.defaultProps = {
  className: undefined
};

Roles.propTypes = {
  className: PropTypes.string
};

export default Roles;
