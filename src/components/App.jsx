import { useState } from 'react';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [feedbackData, setFeedbackData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = type => () => {
    setFeedbackData(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const { good, neutral, bad } = feedbackData;

  const total = good + bad + neutral;
  const countPositiveFeedbackPercentage = Math.round(
    (good / (neutral + good + bad)) * 100
  );

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackData)}
          onLeaveFeedback={handleClick}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
};
