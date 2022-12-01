import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const FeedbackOptions = ({ handleReview, reviewTypes }) => {
  return (
    <ul className={css.BtnList}>
      {reviewTypes.map(item => (
        <li key={item}>
          <button
            data-review={item}
            className={css.BtnOption}
            type="button"
            onClick={handleReview}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  handleReview: PropTypes.func.isRequired,
  reviewTypes: PropTypes.array.isRequired,
};

export default FeedbackOptions;
