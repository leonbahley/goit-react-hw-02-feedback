import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Statistics = ({
  goodReview,
  badReview,
  neutralReview,
  onCountTotalFeedback,
  onCountPositiveFeedbackPercentage,
}) => {
  return (
    <ul className={css.StatisticsList}>
      <li className={css.StatisticsItem}>
        Good:<span>{goodReview}</span>
      </li>
      <li className={css.StatisticsItem}>
        Bad:<span>{badReview}</span>
      </li>
      <li className={css.StatisticsItem}>
        Neutral:<span>{neutralReview}</span>
      </li>
      <li className={css.StatisticsItem}>
        Total:
        <span>{onCountTotalFeedback}</span>
      </li>
      <li>
        Positive feedback:
        <span>{onCountPositiveFeedbackPercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  goodReview: PropTypes.number.isRequired,
  badReview: PropTypes.number.isRequired,
  neutralReview: PropTypes.number.isRequired,
  onCountTotalFeedback: PropTypes.number.isRequired,
  onCountPositiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
