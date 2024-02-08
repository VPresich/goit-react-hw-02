import styles from './Description.module.css';

export const Description = ({ invitation, children }) => {
  return (
    <div>
      <h2 className={styles.title}>{children}</h2>
      <p className={styles.invitation}>{invitation}</p>
    </div>
  );
};
