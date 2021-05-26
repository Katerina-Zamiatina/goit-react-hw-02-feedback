import { createReducer } from '@reduxjs/toolkit';
import { onLeaveFeedback } from './actions';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const feedbackReducer = createReducer(initialState, {
  [onLeaveFeedback]: (state, { payload }) =>
    void { ...state, [payload]: (state[payload] += 1) },
});

export default feedbackReducer;
