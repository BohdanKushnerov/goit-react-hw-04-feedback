import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
