import styles from './Feedback.module.css';

import { Notification } from '../notification/Notification';
import { FeedbackList } from './FeedbackList';
import { totalFeedback, positivePercents } from '../feedback-utils/utils';

export const Feedback = ({ reviews, children }) => {
  return (
    <div>
      {totalFeedback(reviews) > 0 ? (
        <>
          <FeedbackList reviews={reviews} />
          <p className={styles.total}>Total: {totalFeedback(reviews)}</p>
          <p className={styles.positive}>
            Positive: {positivePercents(reviews, 'bad')} %
          </p>
        </>
      ) : (
        <Notification>{children}</Notification>
      )}
    </div>
  );
};
