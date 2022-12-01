import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';
const Notification = ({ message }) => {
  return <p className={css.Message}>{message}</p>;
};
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
