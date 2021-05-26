import { createSelector } from '@reduxjs/toolkit';

export const getFeedback = state => state.feedback;
export const getGood = state => state.feedback.good;
export const getNeutral = state => state.feedback.neutral;
export const getBad = state => state.feedback.bad;

export const getTotalFeedback = createSelector([getFeedback], feedback => {
  return Object.values(feedback).reduce((acc, el) => acc + el, 0);
});


export const getPositiveFeedback = createSelector(
  [getGood, getTotalFeedback],
  (good, total) => {
    return Math.round((good * 100) / total || 0);
  },
);
