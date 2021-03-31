import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Good:{good}</span>
      <span className={styles.text}>Neutral: {neutral}</span>
      <span className={styles.text}>Bad: {bad}</span>
      <span className={styles.text}>Total: {total}</span>
      <span className={styles.text}>Positive feedback: {percentage} %</span>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  percentage: PropTypes.number,
};

export default Statistics;
