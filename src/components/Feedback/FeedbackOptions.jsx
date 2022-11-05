import React from 'react';
const FeedbackOptions = ({
  onhandleGoodReview,
  onhandleNeutralReview,
  onhandleBadReview,
}) => {
  return (
    <ul className="BtnList">
      <li>
        <button type="button" onClick={onhandleGoodReview}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={onhandleNeutralReview}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={onhandleBadReview}>
          Bad
        </button>
      </li>
    </ul>
  );
};
export default FeedbackOptions;
