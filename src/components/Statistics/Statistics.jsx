import css from './Statistics.module.css';

export default function Statistics({
  feedbackGood,
  feedbackNeutral,
  feedbackBad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={css.feedback__statistics}>
      <li className={css.feedback__item}>
        <p>Good: {feedbackGood}</p>
      </li>
      <li className={css.feedback__item}>
        <p>Neutral: {feedbackNeutral}</p>
      </li>
      <li className={css.feedback__item}>
        <p>Bad: {feedbackBad}</p>
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
