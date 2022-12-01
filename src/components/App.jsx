import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';
import Section from './Feedback/Section';
import Notification from './Feedback/Notification';
import css from './Feedback/Feedback.module.css';
export class App extends Component {
  static propTypes = {
    initialValue: PropTypes.number,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateTotal() {
    return this.state.good;
  }

  handleReview = e => {
    if (e.target.dataset.review === 'good') {
      this.setState(prevState => {
        return { good: prevState.good + 1 };
      });
    }

    if (e.target.dataset.review === 'bad') {
      this.setState(prevState => {
        return { bad: prevState.bad + 1 };
      });
    }

    if (e.target.dataset.review === 'neutral') {
      this.setState(prevState => {
        return { neutral: prevState.neutral + 1 };
      });
    }
  };

  countTotalFeedback() {
    const totalFeedback = Object.values(this.state).reduce(function (
      previous,
      value
    ) {
      return previous + value;
    },
    0);
    return totalFeedback;
  }
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }
  render() {
    return (
      <div className={css.FeedbackForm}>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            handleReview={this.handleReview}
            reviewTypes={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
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
        </Section>
      </div>
    );
  }
}
