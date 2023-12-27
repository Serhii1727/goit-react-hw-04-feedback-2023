import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const optionsButton = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const positivePercentageFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.feedback__container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={optionsButton}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        {!totalFeedback ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentageFeedback}
            />
          </Section>
        )}
      </div>
    );
  }
}
