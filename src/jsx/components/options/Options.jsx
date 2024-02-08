import styles from './Options.module.css';
import { OptionButton } from './OptinButton';
// import { totalFeedback } from '../../feedback-utils/utils';

export const Options = ({ onReview, onReset, isResetBtn }) => {
  return (
    <div className={styles.options}>
      <OptionButton onClick={() => onReview('good')}>Good</OptionButton>
      <OptionButton onClick={() => onReview('neutral')}>Neutral</OptionButton>
      <OptionButton onClick={() => onReview('bad')}>Bad</OptionButton>
      {isResetBtn ? <OptionButton onClick={onReset}>Reset</OptionButton> : null}
      {/* {totalFeedback(reviews) === 0 ? null : (
        <OptionButton onClick={onReset}>Reset</OptionButton>
      )} */}
    </div>
  );
};
