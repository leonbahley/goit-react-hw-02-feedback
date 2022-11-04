import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Notification from './Notification';

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {
    initialValue: PropTypes.number,
  };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };
  updateTotal() {
    return this.state.good;
  }
  handleGoodReview = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  handleNeutralReview = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleBadReview = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  countTotalFeedback() {
    return this.state.neutral + this.state.bad + this.state.good;
  }
  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good /
        (this.state.neutral + this.state.bad + this.state.good)) *
        100
    );
  }
  render() {
    return (
      <>
        <FirstSection title="Please leave your feedback">
          <FeedbackOptions
            onhandleBadReview={this.handleBadReview}
            onhandleGoodReview={this.handleGoodReview}
            onhandleNeutralReview={this.handleNeutralReview}
          />
        </FirstSection>
        <SecondSection title="Statistics">
          {this.state.neutral + this.state.bad + this.state.good === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              goodReview={this.state.good}
              badReview={this.state.bad}
              neutralReview={this.state.neutral}
              onCountTotalFeedback={this.countTotalFeedback()}
              onCountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </SecondSection>
      </>
    );
  }
}
export default Feedback;
