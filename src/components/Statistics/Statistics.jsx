import { useSelector } from 'react-redux';
import Notification from '../Notification';

import {
  getGood,
  getNeutral,
  getBad,
  getTotalFeedback,
  getPositiveFeedback,
} from '../../redux/feedback/selectors';

import styles from './Statistics.module.css';

const Statistics = () => {
  const good = useSelector(getGood);
  const neutral = useSelector(getNeutral);
  const bad = useSelector(getBad);
  const total = useSelector(getTotalFeedback);
  const positive = useSelector(getPositiveFeedback);
  
  return (
    <>
      {total > 0 ? (
        <div className={styles.container}>
          <span className={styles.text}>Good:{good}</span>
          <span className={styles.text}>Neutral: {neutral}</span>
          <span className={styles.text}>Bad: {bad}</span>
          <span className={styles.text}>Total: {total}</span>
          <span className={styles.text}>Positive feedback: {positive} %</span>
        </div>
      ) : (
        <Notification message="No feedback is given" />
      )}
    </>
  );
};

export default Statistics;
