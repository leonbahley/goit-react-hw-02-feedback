import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';
const FirstSection = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.Title}>{title}</h2>
      {children}
    </section>
  );
};
FirstSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default FirstSection;
