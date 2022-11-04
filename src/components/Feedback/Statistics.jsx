import React from 'react';
const Statistics = ({
  goodReview,
  badReview,
  neutralReview,
  onCountTotalFeedback,
  onCountPositiveFeedbackPercentage,
}) => {
  return (
    <ul>
      <li>
        Good:<span>{goodReview}</span>
      </li>
      <li>
        Bad:<span>{badReview}</span>
      </li>
      <li>
        Neutral:<span>{neutralReview}</span>
      </li>
      <li>
        Tolal:
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
