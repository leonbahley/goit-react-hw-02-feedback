import React from 'react';

import PropTypes from 'prop-types';
const FirstSection = ({ title, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};
FirstSection.propTypes = {
  title: PropTypes.string,
};

export default FirstSection;
