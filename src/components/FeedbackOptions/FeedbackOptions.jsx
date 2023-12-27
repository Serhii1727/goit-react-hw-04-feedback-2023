import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.button__container}>
      {options.map(buttonName => {
        return (
          <button
            key={buttonName}
            className={css.button}
            onClick={() => {
              onLeaveFeedback(buttonName);
            }}
          >
            <span className={css.button__text}>{buttonName}</span>
          </button>
        );
      })}
    </div>
  );
}
