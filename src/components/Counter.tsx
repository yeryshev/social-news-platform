import styles from './Counter.module.scss';

export const Counter = () => {
  return (
    <>
      <button className={styles.btn}>Counter</button>
      <div className={styles.open}>Hi</div>
    </>
  );
};
