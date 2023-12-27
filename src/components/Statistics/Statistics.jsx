import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={css.feedback__statistics}>
      <li className={css.feedback__item}>
        <p>Good: {good}</p>
      </li>
      <li className={css.feedback__item}>
        <p>Neutral: {neutral}</p>
      </li>
      <li className={css.feedback__item}>
        <p>Bad: {bad}</p>
      </li>
      <li className={css.feedback__item}>
        <p>Total: {total}</p>
      </li>
      <li className={css.feedback__item}>
        <p>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
}
