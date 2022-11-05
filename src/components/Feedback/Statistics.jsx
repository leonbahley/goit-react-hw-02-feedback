import React from 'react';
const Statistics = ({
  goodReview,
  badReview,
  neutralReview,
  onCountTotalFeedback,
  onCountPositiveFeedbackPercentage,
}) => {
  return (
    <ul className="StatisticsList">
      <li className="StatisticsItem">
        Good:<span>{goodReview}</span>
      </li>
      <li className="StatisticsItem">
        Bad:<span>{badReview}</span>
      </li>
      <li className="StatisticsItem">
        Neutral:<span>{neutralReview}</span>
      </li>
      <li className="StatisticsItem">
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
export default Statistics;
