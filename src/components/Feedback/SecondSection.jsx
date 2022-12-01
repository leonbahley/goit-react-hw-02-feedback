import React from 'react';
import PropTypes from 'prop-types';
const SecondSection = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.Title}>{title}</h2>
      {children}
    </section>
  );
};
SecondSection.propTypes = {
  title: PropTypes.string,
};
export default SecondSection;
