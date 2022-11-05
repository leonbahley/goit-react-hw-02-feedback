import React from 'react';
import PropTypes from 'prop-types';
const Notification = ({ message }) => {
  return <p className="Message">{message}</p>;
};
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
