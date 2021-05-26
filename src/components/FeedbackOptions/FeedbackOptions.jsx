import { useSelector, useDispatch } from 'react-redux';

import { getFeedback } from '../../redux/feedback/selectors';
import { onLeaveFeedback } from '../../redux/feedback/actions';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = () => {
  const dispatch = useDispatch();
  const feedback = useSelector(getFeedback);
  const options = Object.keys({ ...feedback });
  
  const handleFeedback = ({ target }) => {
    dispatch(onLeaveFeedback(target.textContent));
  };

  return (
    <div>
      {options.map(option => (
        <button
          type="button"
          className={styles.button}
          key={option}
          onClick={handleFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
