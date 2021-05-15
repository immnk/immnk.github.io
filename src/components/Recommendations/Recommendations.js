import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

import YuryImage from './images/yury.jpeg';
import MarkImage from './images/mark.jpeg';
import ChintanImage from './images/chintan.jpeg';
import VamsiImage from './images/vamsi.jpeg';

import css from './Recommendations.css';

const Recommendations = ({ className }) => {
  const recommendations = [
    {
      name: 'Yury',
      image: YuryImage,
      text: `I worked with Manikanta for almost two years 
      and he shown himself to be a capable and productive developer. 
      He's a quick learner, inquisitive and resourceful. 
      He can start a new package and get it live, he can independently develop a new infrastructure tool, 
      and is always on the lookout for new challenges.`
    },
    {
      name: 'Mark',
      image: MarkImage,
      text: `Manikanta is a talented developer. He is an adventurer and not afraid to venture new technologies. 
        He thinks fast and provide valuable insights for the team. He is a guy that gets the job done.`
    },
    {
      name: 'Chintan',
      image: ChintanImage,
      text:
        'Highly skilled developer. Codes very well and of high quality. He was our go to guy when he was in Sirius.'
    },
    {
      name: 'Vamsi',
      image: VamsiImage,
      text: `I have worked with Manikanta, for several different projects ranging 
        from windows mobile apps to android to angular and node.js. 
        He is an excellent problem solver, he has no fear for diving into the code bases written by others, 
        regardless of complexity. Hacker by nature, he quickly gives you the prototype of your app 
        and iterate over it by taking the feedback. He has a good visual sense like a designer, 
        and he also know sketch, posts random things in behance and things like that.
         He has passion to complete the product with in the stipulated time, with the best of the quality code and UI. 
         I look forward to work with him for the multiple projects in the days to come.`
    }
  ];
  return (
    <section className={classNames(css.root, className)}>
      <ScrollAnimation animateIn="fadeIn" delay={100} initiallyVisible={false}>
        <div className={css.container}>
          <h3 className={css.header}>Testimonials I received!</h3>
          <p className={css.description}>
            All recommendations/Testimonials are fetched from my{' '}
            <a href="https://www.linkedin.com/in/manikantatankala/">LinkedIn</a> profile.
          </p>
          <div className={css.list}>
            {recommendations.map((r) => {
              return (
                <div className={css.recommendation} key={r.name}>
                  <div>
                    <img className={css.avatar} src={r.image} alt={r.name} />
                    <h5 className={css.name}>{r.name}</h5>
                  </div>
                  <p className={css.text}>{r.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

Recommendations.defaultProps = {
  className: undefined
};

Recommendations.propTypes = {
  className: PropTypes.string
};

export default Recommendations;
