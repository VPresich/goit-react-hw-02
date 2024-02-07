import styles from './Description.module.css';

export const Description = ({ invitation, children }) => {
  return (
    <div>
      <h2 className={styles['cafe-title']}>{children}</h2>
      <p className={styles['feedback-invitation']}>{invitation}</p>
    </div>
  );
};
