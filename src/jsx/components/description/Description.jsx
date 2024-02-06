import styles from './Description.module.css';

export const Description = () => {
  return (
    <div>
      <h2 className={styles['cafe-title']}>Sip Happens Café</h2>
      <p className={styles['feedback-invitation']}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
