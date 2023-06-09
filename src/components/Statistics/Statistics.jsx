import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  feedback: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p className={css.stats}>Good: {good}</p>
      <p className={css.stats}>Neutral: {neutral}</p>
      <p className={css.stats}>Bad: {bad}</p>
      <p className={css.stats}>Total: {total}</p>
      <p className={css.stats}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
