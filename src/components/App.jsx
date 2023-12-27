import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import css from './App.module.css';

export function App() {
  const [feedbackGood, setFeedbackGood] = useState(0);
  const [feedbackNeutral, setFeedbackNeutral] = useState(0);
  const [feedbackBad, setFeedbackBad] = useState(0);

  const handleFeedback = name => {
    if (name === 'good') {
      setFeedbackGood(prevFeedbackGood => prevFeedbackGood + 1);
    }
    if (name === 'neutral') {
      setFeedbackNeutral(prevFeedbackNeutral => prevFeedbackNeutral + 1);
    }
    if (name === 'bad') {
      setFeedbackBad(prevFeedbackBad => prevFeedbackBad + 1);
    }
  };

  const countTotalFeedback = () => {
    return feedbackGood + feedbackNeutral + feedbackBad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedbackGood / countTotalFeedback()) * 100);
  };

  const optionsButton = ['good', 'neutral', 'bad'];
  const totalFeedback = countTotalFeedback();
  const positivePercentageFeedback = countPositiveFeedbackPercentage();

  return (
    <div className={css.feedback__container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsButton}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      {!totalFeedback ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title={'Statistics'}>
          <Statistics
            feedbackGood={feedbackGood}
            feedbackNeutral={feedbackNeutral}
            feedbackBad={feedbackBad}
            total={totalFeedback}
            positivePercentage={positivePercentageFeedback}
          />
        </Section>
      )}
    </div>
  );
}
